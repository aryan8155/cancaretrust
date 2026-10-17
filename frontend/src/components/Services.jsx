import defencePhoto from '../assets/defence.jpeg'
import defencePhoto2 from '../assets/defence2.jpeg'
import defencePhoto3 from '../assets/defence3.jpeg'
import health1 from '../assets/health1.jpeg'
import health2 from '../assets/health2.jpeg'
import health3 from '../assets/health3.jpeg'

function Services() {
  const areas = [
    {
      title: 'Senior Citizen Welfare',
      icon: '01',
      shortDescription: 'Supporting dignity and wellbeing.',
      description:
        'Providing emotional support, basic assistance, awareness programs, and dignity-driven initiatives for elderly individuals who lack family or social support.',
    },
    {
      title: 'Women Empowerment',
      icon: '02',
      shortDescription: 'Building confidence and self-reliance.',
      description:
        "Encouraging women's self-reliance through education, skill-building programs, awareness campaigns, and social empowerment initiatives.",
    },
    {
      title: 'Education & Awareness',
      icon: '03',
      shortDescription: 'Opening doors through learning.',
      description:
        'Promoting basic education, moral values, and social awareness among children, women, and underprivileged communities.',
    },
    {
      title: 'Environment Protection',
      icon: '04',
      shortDescription: 'Caring for the places we share.',
      description:
        'Working towards a cleaner and greener environment through awareness programs, plantation drives, and sustainable practices.',
    },
  ]

  return (
    <section id="work" className="bg-[#f4f7ef] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-semibold uppercase tracking-[0.18em] text-[#a36f18]">Our work</p>
          <h2 className="font-display mt-3 text-4xl font-bold text-[#173d36]">Where care becomes action</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our work focuses on practical, people-centric initiatives that address real
            challenges within communities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group rounded-2xl border border-[#dce5dc] bg-[#fbfcf8] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e4b85e] text-sm font-bold text-[#173d36] transition group-hover:rotate-6">
                {area.icon}
              </div>
              <h3 className="font-display mt-6 text-xl font-bold text-[#173d36] transition group-hover:text-[#a36f18]">{area.title}</h3>
              <p className="mt-3 font-semibold text-[#65766a]">{area.shortDescription}</p>
              <p className="mt-4 leading-relaxed text-gray-600">{area.description}</p>
              <span className="mt-6 inline-block font-bold text-[#a36f18]">Learn more <span aria-hidden="true">→</span></span>
            </div>
          ))}
        </div>

        <div className="mt-24" id="activities">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#a36f18]">Our work in action</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-[#173d36]">Care, participation, action</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              A closer look at the health and empowerment initiatives led with communities.
            </p>
          </div>

          <div className="mt-12">
            <p className="font-semibold uppercase tracking-[0.16em] text-[#a36f18]">Health camp initiatives</p>
            <h3 className="font-display mt-2 text-3xl font-bold text-[#173d36]">Bringing essential care closer to home</h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">
              Community health camps connect people with basic health support, guidance, and a caring space to ask for help.
            </p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[health1, health2, health3].map((photo, index) => (
                <figure key={photo} className="group overflow-hidden rounded-2xl border border-[#dce5dc] bg-white shadow-sm">
                  <img src={photo} alt={`Can Care Trust health camp activity ${index + 1}`} loading={index === 0 ? 'eager' : 'lazy'} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                  <figcaption className="px-5 py-4 text-sm font-semibold text-[#173d36]">Health camp · Community care</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <p className="font-semibold uppercase tracking-[0.16em] text-[#a36f18]">Women &amp; girls empowerment</p>
            <h3 className="font-display mt-2 text-3xl font-bold text-[#173d36]">Confidence through self-defence training</h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">
              In partnership with Delhi Police, these sessions help women and girls build practical skills, confidence, and awareness.
            </p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[defencePhoto, defencePhoto2, defencePhoto3].map((photo, index) => (
                <figure key={photo} className="group overflow-hidden rounded-2xl border border-[#dce5dc] bg-white shadow-sm">
                  <img src={photo} alt={`Can Care Trust self-defence training session ${index + 1}`} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                  <figcaption className="px-5 py-4 text-sm font-semibold text-[#173d36]">Self-defence training · Delhi Police partnership</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <a href="/work" className="mt-8 inline-block font-bold text-[#a36f18]">View all activities <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  )
}

export default Services