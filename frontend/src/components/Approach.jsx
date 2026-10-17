import approachImage from '../assets/bg.png'

function Approach() {
  return (
    <section className="bg-[#fbfcf8] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-[#e9dfcc] shadow-sm">
          <img
            src={approachImage}
            alt="Can Care Trust community and care initiative"
            className="aspect-[16/9] h-full w-full object-cover object-center transition duration-500 hover:scale-105"
          />
        </div>

        <div>
          <p className="font-semibold uppercase tracking-[0.18em] text-[#a36f18]">Our approach</p>
          <h2 className="font-display mt-3 text-4xl font-bold text-[#173d36]">Listen first. Act with care.</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Can Care Trust believes in grassroots action, community participation, and
            long-term solutions.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            We work closely with local communities to understand their needs and
            implement practical, people-centric initiatives that bring real change.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {['Understand', 'Connect', 'Act', 'Create long-term impact'].map((step, index) => (
              <div key={step} className="flex items-center gap-4 border-t border-[#dce5dc] pt-4">
                <span className="font-display text-2xl font-bold text-[#d49b35]">0{index + 1}</span>
                <span className="font-semibold text-[#173d36]">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach