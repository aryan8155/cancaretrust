import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const sections = ['Dashboard', 'Events', 'Gallery', 'Join Us Applications', 'Trustees', 'Announcements', 'Website Settings']

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'

function App() {
  const [token, setToken] = useState('')

  if (!token) return <Login onLogin={setToken} />

  return (
    <main className="admin-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">C</span><span>Can Care Trust<br /><small>Admin panel</small></span></div>
        <nav aria-label="Admin navigation">{sections.map((section, index) => <button className={index === 0 ? 'nav-item active' : 'nav-item'} key={section}>{section}</button>)}</nav>
        <button className="logout">Log out</button>
      </aside>
      <section className="content">
        <header className="topbar"><div><p className="eyebrow">Admin dashboard</p><h1>Good morning</h1></div><span className="status">API ready</span></header>
        <div className="stats">
          <Stat label="Events" value="0" />
          <Stat label="Photos" value="0" />
          <Stat label="Join Us" value="0" />
          <Stat label="Trustees" value="0" />
        </div>
        <section className="panel"><div><p className="eyebrow">Content management</p><h2>Keep the public website current</h2><p className="muted">Create events, publish announcements, review Join Us applications, and manage trustee profiles from one place.</p></div><div className="quick-actions"><button>Add event</button><button className="secondary">New announcement</button></div></section>
        <section className="panel table-panel"><div className="panel-heading"><h2>Recent activity</h2><span className="muted">Connected to the REST API</span></div><div className="empty-state"><strong>No records yet</strong><span>Published events and applications will appear here.</span></div></section>
      </section>
    </main>
  )
}

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(event) {
    event.preventDefault()
    setLoading(true)
    setError('')
    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Login failed.')
      onLogin(data.token)
    } catch (loginError) {
      setError(loginError.message)
    } finally {
      setLoading(false)
    }
  }

  return <main className="login-shell"><form className="login-card" onSubmit={submit}><p className="eyebrow">Can Care Trust</p><h1>Admin login</h1><p className="muted">Sign in to manage public website content.</p><label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label><label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>{error && <p className="error" role="alert">{error}</p>}<button type="submit">{loading ? 'Signing in...' : 'Sign in'}</button></form></main>
}

function Stat({ label, value }) {
  return <div className="stat"><span>{label}</span><strong>{value}</strong></div>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)