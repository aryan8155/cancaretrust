import { Link } from 'react-router-dom'

function JoinBanner() {
  const reasons = ['Make a meaningful difference', 'Work with communities', 'Share your skills', 'Participate in initiatives']

  return (
    <section className="bg-[#173d36] py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="font-semibold uppercase tracking-[0.18em] text-[#e4b85e]">You can make a difference</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">Your time. Your skills. Your involvement.</h2>
          <ul className="mt-8 grid gap-4 text-green-50 sm:grid-cols-2">
            {reasons.map((reason) => <li key={reason} className="flex items-center gap-3"><span className="text-[#e4b85e]" aria-hidden="true">✓</span>{reason}</li>)}
          </ul>
        </div>
        <Link to="/join-us" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#e4b85e] px-7 font-bold text-[#173d36] transition hover:-translate-y-1 hover:bg-[#f0ca78]">
          Join Can Care Trust <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}

export default JoinBanner