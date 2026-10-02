import approachImage from '../assets/bg.png'

function Approach() {
  return (
    <section className="bg-[#f3eee4] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-[#e9dfcc] shadow-sm">
          <img
            src={approachImage}
            alt="Can Care Trust community and care initiative"
            className="aspect-[16/9] h-full w-full object-cover object-center transition duration-500 hover:scale-105"
          />
        </div>

        <div>
          <p className="font-semibold uppercase tracking-wide text-green-600">Our Approach</p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            People at the heart of everything we do
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Can Care Trust believes in grassroots action, community participation, and
            long-term solutions.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            We work closely with local communities to understand their needs and
            implement practical, people-centric initiatives that bring real change.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-green-600">Local</h3>
              <p className="mt-1 text-gray-500">Grassroots Action</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600">People</h3>
              <p className="mt-1 text-gray-500">Community Focus</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600">Long-term</h3>
              <p className="mt-1 text-gray-500">Sustainable Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach