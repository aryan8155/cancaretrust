import { Link } from 'react-router-dom'
import heroImage from '../assets/mainphoto.jpeg'

function Hero() {
  return (
    <section id="home" className="hero-shell relative isolate min-h-[78vh] overflow-hidden bg-[#173d36]">
      <img src={heroImage} alt="Can Care Trust community work" className="absolute inset-0 -z-20 h-full w-full origin-top scale-[1.08] object-cover object-top [clip-path:inset(0_0_14%_0)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(13,49,42,.86)_0%,rgba(18,66,53,.58)_46%,rgba(14,47,39,.12)_100%)]" />
      <div className="mx-auto flex min-h-[78vh] max-w-7xl items-end px-6 py-20 sm:py-28">
        <div className="max-w-3xl animate-fade-up text-white">
          <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-green-50 backdrop-blur-sm">
            Serving communities since 2024
          </p>
          <h1 className="max-w-2xl text-5xl font-bold leading-[1.05] md:text-7xl">
            Care that begins with listening.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-green-50/90 md:text-xl">
            Can Care Trust works alongside communities in Delhi to build a more compassionate,
            inclusive, and empowered society.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/join-us" className="rounded-full bg-[#e4b85e] px-7 py-3.5 text-center font-bold text-[#173d36] transition hover:-translate-y-0.5 hover:bg-[#f0ca78]">
              Join Can Care Trust <span aria-hidden="true">→</span>
            </Link>
            <Link to="/work" className="rounded-full border border-white/60 px-7 py-3.5 text-center font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              Explore our work <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero