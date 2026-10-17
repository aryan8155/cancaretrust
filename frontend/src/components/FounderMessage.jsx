import founderPhoto from '../assets/kavita.jpeg'

function FounderMessage() {
  return (
    <section className="bg-[#f4f7ef] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid overflow-hidden rounded-3xl border border-[#dce5dc] bg-[#fbfcf8] shadow-sm md:grid-cols-[0.75fr_1.25fr]">
          <img src={founderPhoto} alt="Kavita Srivastava, founder of Can Care Trust" loading="lazy" className="h-full min-h-72 w-full object-cover object-top" />
          <div className="p-8 sm:p-12">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#a36f18]">Founder&apos;s message</p>
            <blockquote className="font-display mt-7 text-3xl italic leading-tight text-[#173d36] md:text-4xl">
              “Service to humanity is the highest form of responsibility.”
            </blockquote>
            <p className="mt-7 max-w-xl leading-relaxed text-[#65766a]">
              Through Can Care Trust, our aim is to bring care, dignity, and opportunity to those who need it most.
            </p>
            <div className="mt-8 border-t border-[#dce5dc] pt-5">
              <p className="font-bold text-[#173d36]">Kavita Srivastava</p>
              <p className="mt-1 text-[#65766a]">Founder, Can Care Trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderMessage