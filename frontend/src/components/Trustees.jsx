import anupPhoto from '../assets/anup.jpeg'
import kavitaPhoto from '../assets/kavita.jpeg'
import poojaPhoto from '../assets/pooja.jpeg'
import raniPhoto from '../assets/rani.jpeg'
import somnathPhoto from '../assets/somnath.jpeg'
import vikasPhoto from '../assets/vikas.jpeg'

function Trustees() {
  const trustees = [
    { name: 'Mrs. Kavita Srivastava', role: 'Founder / Director', photo: kavitaPhoto },
    { name: 'Mr. Vikas Teotia', role: 'Managing Director', photo: vikasPhoto },
    { name: 'Mr. Somnath', role: 'Member', photo: somnathPhoto },
    { name: 'Mr. Anup Murari Rajan', role: 'Member', photo: anupPhoto },
    { name: 'Ms. Pooja Verma', role: 'Member', photo: poojaPhoto },
    { name: 'Ms. Rani', role: 'Team Member', photo: raniPhoto },
  ]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-wide text-green-600">Our Trustees</p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            The people behind Can Care Trust
          </h2>
          <p className="mt-4 text-gray-600">
            Our trustees are committed to guiding the Trust towards meaningful and
            sustainable social impact.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustees.map((trustee) => (
            <div
              key={trustee.name}
              className="rounded-2xl bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={trustee.photo}
                alt={trustee.name}
                loading="lazy"
                className="mx-auto aspect-square h-28 w-28 rounded-full object-cover object-top ring-4 ring-green-100"
              />
              <h3 className="mt-5 font-bold text-gray-900">{trustee.name}</h3>
              <p className="mt-2 text-sm text-green-600">{trustee.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trustees