import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { apiRequest } from '../services/api'

function AdminDashboardPage() {
  const navigate = useNavigate()
  const token = localStorage.getItem('cancare_admin_token')
  const [applications, setApplications] = useState([])
  const [apiError, setApiError] = useState('')

  useEffect(() => {
    if (!token) return
    apiRequest('/api/applications', { headers: { Authorization: `Bearer ${token}` } })
      .then(setApplications)
      .catch((error) => setApiError(error.message === 'Admin authentication required.' || error.message.includes('expired') ? 'Your session has expired.' : error.message))
  }, [token])

  function logout() {
    localStorage.removeItem('cancare_admin_token')
    navigate('/admin/login', { replace: true })
  }

  if (!token) return <Navigate to="/admin/login" replace />

  return (
    <main className="min-h-screen bg-[#f4f7ef] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><p className="font-semibold uppercase tracking-[0.18em] text-[#a36f18]">Admin dashboard</p><h1 className="font-display mt-2 text-4xl font-bold text-[#173d36]">Website control centre</h1></div><button type="button" onClick={logout} className="min-h-11 rounded-full border border-[#173d36] px-5 font-bold text-[#173d36]">Logout</button></header>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[['Events', '0'], ['Photos', '0'], ['Join Us', applications.length], ['Trustees', '0']].map(([label, value]) => <div key={label} className="rounded-2xl border border-[#dce5dc] bg-[#fbfcf8] p-6 shadow-sm"><p className="text-[#65766a]">{label}</p><p className="font-display mt-3 text-4xl font-bold text-[#173d36]">{value}</p></div>)}</div>
        <section className="mt-6 rounded-2xl border border-[#dce5dc] bg-[#fbfcf8] p-6 shadow-sm"><h2 className="font-display text-2xl font-bold text-[#173d36]">Management areas</h2><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{['Events', 'Gallery', 'Join Us Applications', 'Trustees', 'Announcements', 'Website Settings'].map((item) => <button key={item} type="button" className="min-h-12 rounded-xl border border-[#dce5dc] px-4 text-left font-semibold text-[#173d36] hover:bg-[#f4f7ef]">{item}<span className="float-right text-[#a36f18]">→</span></button>)}</div></section>
        <section className="mt-6 rounded-2xl border border-[#dce5dc] bg-[#fbfcf8] p-6 shadow-sm"><h2 className="font-display text-2xl font-bold text-[#173d36]">Recent Join Us applications</h2>{apiError ? <p role="alert" className="mt-4 rounded-xl bg-red-50 p-4 text-red-700">{apiError}</p> : applications.length === 0 ? <p className="mt-4 text-[#65766a]">No applications yet.</p> : <div className="mt-4 space-y-3">{applications.slice(0, 5).map((application) => <div key={application._id} className="rounded-xl border border-[#dce5dc] p-4"><strong>{application.fullName}</strong><span className="ml-3 text-[#65766a]">{application.email}</span></div>)}</div>}</section>
      </div>
    </main>
  )
}

export default AdminDashboardPage