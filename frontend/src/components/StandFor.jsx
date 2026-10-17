const values = [
  ['♥', 'Care', 'Supporting people'],
  ['♢', 'Dignity', 'Respect for everyone'],
  ['♧', 'Sustainability', 'Better environment'],
  ['▤', 'Opportunity', 'Education & growth'],
]

function StandFor() {
  return (
    <section className="bg-[#f4f7ef] py-20" aria-labelledby="stand-for-heading">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-semibold uppercase tracking-[0.18em] text-[#a36f18]">What we stand for</p>
        <h2 id="stand-for-heading" className="font-display mt-3 text-4xl font-bold text-[#173d36]">Care that guides every action</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([icon, title, description]) => (
            <div key={title} className="rounded-2xl border border-[#dce5dc] bg-[#fbfcf8] p-6 transition hover:-translate-y-1 hover:shadow-md">
              <span className="text-3xl text-[#a36f18]" aria-hidden="true">{icon}</span>
              <h3 className="font-display mt-5 text-xl font-bold text-[#173d36]">{title}</h3>
              <p className="mt-2 text-[#65766a]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StandFor