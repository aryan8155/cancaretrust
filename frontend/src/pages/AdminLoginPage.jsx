import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiRequest } from '../services/api'

function AdminLoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      const data = await apiRequest('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      })
      localStorage.setItem('cancare_admin_token', data.token)
      navigate('/admin/dashboard', { replace: true })
    } catch (loginError) {
      setError(loginError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f7ef] px-6 py-12">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-3xl border border-[#dce5dc] bg-[#fbfcf8] p-8 shadow-sm sm:p-10">
        <p className="font-semibold uppercase tracking-[0.18em] text-[#a36f18]">Can Care Trust</p>
        <h1 className="font-display mt-3 text-4xl font-bold text-[#173d36]">Admin login</h1>
        <p className="mt-3 text-[#65766a]">Sign in to manage the public website.</p>
        <div className="mt-8 space-y-5">
          <label className="block text-sm font-semibold text-[#173d36]">Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required className="mt-2 w-full rounded-xl border border-[#b7c9b8] bg-white px-4 py-3 outline-none focus:border-[#173d36]" /></label>
          <label className="block text-sm font-semibold text-[#173d36]">Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required className="mt-2 w-full rounded-xl border border-[#b7c9b8] bg-white px-4 py-3 outline-none focus:border-[#173d36]" /></label>
        </div>
        {error && <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        <button type="submit" disabled={loading} className="mt-6 min-h-12 w-full rounded-full bg-[#173d36] px-6 font-bold text-white transition hover:bg-[#2d5b4d] disabled:opacity-60">{loading ? 'Signing in...' : 'Sign in'}</button>
      </form>
    </main>
  )
}

export default AdminLoginPage