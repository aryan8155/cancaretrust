import 'dotenv/config'
import bcrypt from 'bcryptjs'
import cors from 'cors'
import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 5000
const requireDatabaseInDeployment = process.env.NODE_ENV === 'production' || process.env.REQUIRE_DATABASE === 'true'

const allowedOrigins = [process.env.CLIENT_URL, process.env.CLIENT_ORIGIN, 'http://localhost:5173'].filter(Boolean)
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true)
    return callback(new Error('CORS origin is not allowed.'))
  },
}))
app.use(express.json({ limit: '1mb' }))

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  date: { type: String, required: true },
  location: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  photos: [{ type: String }],
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
}, { timestamps: true })

const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  contribution: { type: String, required: true },
  availability: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true })

const trusteeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  role: { type: String, required: true, trim: true },
  photo: String,
}, { timestamps: true })

const announcementSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  body: { type: String, required: true },
  published: { type: Boolean, default: false },
}, { timestamps: true })

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  role: { type: String, default: 'admin' },
}, { timestamps: true })

const Event = mongoose.model('Event', eventSchema)
const Application = mongoose.model('Application', applicationSchema)
const Trustee = mongoose.model('Trustee', trusteeSchema)
const Announcement = mongoose.model('Announcement', announcementSchema)
const Admin = mongoose.model('Admin', adminSchema)

function requireAdmin(request, response, next) {
  const token = request.headers.authorization?.replace('Bearer ', '')
  if (!token) return response.status(401).json({ message: 'Admin authentication required.' })

  try {
    request.admin = jwt.verify(token, process.env.JWT_SECRET)
    return next()
  } catch {
    return response.status(401).json({ message: 'Invalid or expired admin token.' })
  }
}

function databaseRequired(request, response, next) {
  if (mongoose.connection.readyState !== 1) {
    return response.status(503).json({ message: 'Database is not connected.' })
  }
  return next()
}

function crudRoutes(path, Model) {
  app.get(`/api/${path}`, requireAdmin, databaseRequired, async (request, response) => {
    response.json(await Model.find().sort({ createdAt: -1 }))
  })

  app.post(`/api/${path}`, requireAdmin, databaseRequired, async (request, response) => {
    const record = await Model.create(request.body)
    response.status(201).json(record)
  })

  app.patch(`/api/${path}/:id`, requireAdmin, databaseRequired, async (request, response) => {
    const record = await Model.findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true })
    if (!record) return response.status(404).json({ message: 'Record not found.' })
    return response.json(record)
  })

  app.delete(`/api/${path}/:id`, requireAdmin, databaseRequired, async (request, response) => {
    const record = await Model.findByIdAndDelete(request.params.id)
    if (!record) return response.status(404).json({ message: 'Record not found.' })
    return response.status(204).send()
  })
}

function healthResponse(request, response) {
  const connected = mongoose.connection.readyState === 1
  const healthy = connected || !requireDatabaseInDeployment
  return response.status(healthy ? 200 : 503).json({
    status: healthy ? 'OK' : 'DEGRADED',
    database: connected ? 'connected' : 'disconnected',
    service: 'cancare-trust-api',
  })
}

app.get('/api/health', healthResponse)
app.get('/health', healthResponse)

app.post('/api/auth/login', async (request, response) => {
  const { email, password } = request.body
  const normalizedEmail = email?.trim().toLowerCase()
  const admin = mongoose.connection.readyState === 1 ? await Admin.findOne({ email: normalizedEmail }) : null
  const passwordHash = admin?.passwordHash || (normalizedEmail === process.env.ADMIN_EMAIL ? process.env.ADMIN_PASSWORD_HASH : '')
  const valid = await bcrypt.compare(password || '', passwordHash || '')
  if (!valid) return response.status(401).json({ message: 'Invalid admin credentials.' })
  return response.json({ token: jwt.sign({ email: normalizedEmail, role: admin?.role || 'admin' }, process.env.JWT_SECRET, { expiresIn: '8h' }) })
})

app.get('/api/public/events', async (request, response) => {
  if (mongoose.connection.readyState !== 1) return response.json([])
  return response.json(await Event.find({ status: 'published' }).sort({ date: 1 }))
})
app.get('/api/public/announcements', async (request, response) => {
  if (mongoose.connection.readyState !== 1) return response.json([])
  return response.json(await Announcement.find({ published: true }).sort({ createdAt: -1 }))
})

app.post('/api/applications', databaseRequired, async (request, response) => {
  const application = await Application.create(request.body)
  response.status(201).json({ message: 'Application received.', id: application.id })
})

crudRoutes('events', Event)
crudRoutes('trustees', Trustee)
crudRoutes('announcements', Announcement)

app.get('/api/applications', requireAdmin, databaseRequired, async (request, response) => response.json(await Application.find().sort({ createdAt: -1 })))

async function start() {
  if (process.env.NODE_ENV === 'production' && !process.env.MONGO_URI) {
    console.error('ERROR: MONGO_URI is required in production.')
    process.exit(1)
  }

  if (process.env.MONGO_URI) {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected successfully')
  } else {
    if (requireDatabaseInDeployment) throw new Error('MONGO_URI is required when the backend runs in production.')
    console.warn('MONGO_URI is not configured; API will start without database access in local development.')
  }

  app.listen(port, '0.0.0.0', () => console.log(`Can Care Trust API listening on port ${port}`))
}

start().catch((error) => {
  console.error(error)
  process.exit(1)
})