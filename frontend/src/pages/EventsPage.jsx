import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { apiRequest } from '../services/api'

const events = [
  {
    title: 'Community Health Camp',
    date: 'Community initiative',
    location: 'Delhi, India',
    description: 'Connecting community members with basic health support, guidance, and a caring space to ask for help.',
  },
  {
    title: 'Self-Defence Training',
    date: 'Empowerment initiative',
    location: 'Delhi, India',
    description: 'Practical sessions that help women and girls build confidence, awareness, and self-protection skills.',
  },
]

function EventsPage() {
  const [publishedEvents, setPublishedEvents] = useState(events)

  useEffect(() => {
    apiRequest('/api/public/events')
      .then((data) => { if (data.length > 0) setPublishedEvents(data) })
      .catch(() => {})
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#173d36] px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#e4b85e]">Events</p>
            <h1 className="font-display mt-3 text-5xl font-bold">Community initiatives</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-green-50/85">Follow the activities, programmes, and gatherings where Can Care Trust works alongside communities.</p>
          </div>
        </section>
        <section className="bg-[#fbfcf8] px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            {publishedEvents.map((event) => (
              <article key={event.title} className="rounded-2xl border border-[#dce5dc] bg-white p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#a36f18]">{event.date}</p>
                <h2 className="font-display mt-3 text-3xl font-bold text-[#173d36]">{event.title}</h2>
                <p className="mt-2 font-semibold text-[#65766a]">{event.location}</p>
                <p className="mt-5 leading-relaxed text-gray-600">{event.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default EventsPage