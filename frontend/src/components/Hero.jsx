import { Link } from 'react-router-dom'
import heroImage from '../assets/mainphoto.jpeg'

function Hero() {
  return (
    <section id="home" className="flex min-h-[85vh] items-center overflow-hidden bg-green-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className="animate-fade-up">
          <p className="mb-4 font-semibold uppercase tracking-wide text-green-600">
            Can Care Trust • Delhi
          </p>

          <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
            Care.
            <span className="text-green-600"> Dignity.</span>
            <br />
            Hope.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
            Can Care Trust works at the grassroots level to support vulnerable and
            marginalized communities and create a compassionate, inclusive, and
            empowered society.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/work" className="rounded-lg bg-green-600 px-6 py-3 text-white transition hover:bg-green-700">
              Our Work
            </Link>
            <Link to="/contact" className="rounded-lg border border-green-600 px-6 py-3 text-green-600 transition hover:bg-green-100">
              Contact Us
            </Link>
            <Link to="/join-us" className="rounded-lg bg-green-700 px-6 py-3 text-white transition hover:bg-green-800">
              Join Us
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-500">Established in Delhi • October 2024</p>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl md:aspect-[2/1]">
          <img
            src={heroImage}
            alt="Can Care Trust community work"
            className="h-full w-full origin-top object-cover object-top scale-[1.16] transition duration-500"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </section>
  )
}

export default Hero