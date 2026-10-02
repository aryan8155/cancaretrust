import defencePhoto from '../assets/defence.jpeg'
import defencePhoto2 from '../assets/defence2.jpeg'
import defencePhoto3 from '../assets/defence3.jpeg'
import health1 from '../assets/health1.jpeg'
import health2 from '../assets/health2.jpeg'
import health3 from '../assets/health3.jpeg'
import health4 from '../assets/health4.jpeg'

function Services() {
  const areas = [
    {
      title: 'Senior Citizen Welfare',
      description:
        'Providing emotional support, basic assistance, awareness programs, and dignity-driven initiatives for elderly individuals who lack family or social support.',
    },
    {
      title: 'Women Empowerment',
      description:
        "Encouraging women's self-reliance through education, skill-building programs, awareness campaigns, and social empowerment initiatives.",
    },
    {
      title: 'Education & Awareness',
      description:
        'Promoting basic education, moral values, and social awareness among children, women, and underprivileged communities.',
    },
    {
      title: 'Environment Protection',
      description:
        'Working towards a cleaner and greener environment through awareness programs, plantation drives, and sustainable practices.',
    },
  ]

  return (
    <section id="work" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-semibold uppercase text-green-600">Our Work</p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">Our Key Focus Areas</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our work focuses on practical, people-centric initiatives that address real
            challenges within communities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-xl font-bold text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
                +
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 transition group-hover:text-green-700">{area.title}</h3>
              <p className="mt-4 leading-relaxed text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-wide text-green-600">In Action</p>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">Health camp initiatives</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Bringing care and essential health support closer to the communities we serve.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[health1, health2, health3, health4].map((photo, index) => (
              <figure key={photo} className="group relative overflow-hidden rounded-2xl">
                <img
                  src={photo}
                  alt={`Can Care Trust health camp activity ${index + 1}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="aspect-[16/7] w-full origin-top object-cover object-top scale-[1.16] transition duration-500 group-hover:scale-[1.2]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 pb-4 pt-10 text-sm font-semibold text-white">
                  {index === 0 ? 'Community care in action' : 'Health camp · Community support'}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-wide text-green-600">Women &amp; Girls Empowerment</p>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              Self-defence training in the community
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Can Care Trust, in partnership with Delhi Police, supports women and girls
              through practical self-defence training, confidence-building, and community
              awareness.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[defencePhoto, defencePhoto2, defencePhoto3].map((photo, index) => (
              <figure key={photo} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm">
                <img
                  src={photo}
                  alt={`Women and girls self-defence training with Can Care Trust and Delhi Police, session ${index + 1}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <figcaption className="border-t border-gray-100 px-5 py-4 text-sm font-semibold text-gray-800">
                  Can Care Trust × Delhi Police
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services