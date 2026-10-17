function Impact() {
  const highlights = [
    ['Delhi-rooted', 'Local action'],
    ['People-first', 'Community led'],
    ['Since 2024', 'Growing with care'],
  ]

  return (
    <section className="border-b border-[#dce5dc] bg-[#f4f7ef] py-9" aria-label="Can Care Trust highlights">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-3 sm:gap-0">
        {highlights.map(([title, label]) => (
          <div key={title} className="flex items-center gap-4 border-[#dce5dc] sm:justify-center sm:border-r sm:last:border-r-0">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d49b35]" aria-hidden="true" />
            <div>
              <p className="font-display text-2xl font-bold text-[#173d36]">{title}</p>
              <p className="text-sm text-[#65766a]">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Impact