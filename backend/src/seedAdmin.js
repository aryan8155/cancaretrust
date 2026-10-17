import 'dotenv/config'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  role: { type: String, default: 'admin' },
})
const Admin = mongoose.model('Admin', adminSchema)

if (!process.env.MONGO_URI) throw new Error('MONGO_URI is required to seed an admin.')
if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD are required only for this local seed command.')

await mongoose.connect(process.env.MONGO_URI)
await Admin.findOneAndUpdate(
  { email: process.env.ADMIN_EMAIL.toLowerCase() },
  { email: process.env.ADMIN_EMAIL.toLowerCase(), passwordHash: await bcrypt.hash(process.env.ADMIN_PASSWORD, 12), role: 'admin' },
  { upsert: true, new: true, setDefaultsOnInsert: true },
)
console.log(`Admin seeded: ${process.env.ADMIN_EMAIL}`)
await mongoose.disconnect()