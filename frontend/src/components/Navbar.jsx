import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#dce5dc] bg-[#fbfcf8]/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3">
            <img src={logo} alt="Can Care Trust logo" className="h-12 w-12 rounded-full object-contain" />
            <div>
              <h1 className="font-display text-xl font-bold text-[#173d36]">Can Care Trust</h1>
              <p className="text-xs text-[#65766a]">Care · Dignity · Hope</p>
            </div>
          </Link>

          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            <Link to="/" className="text-gray-700 transition hover:text-green-700">Home</Link>
            <Link to="/about" className="text-gray-700 transition hover:text-green-700">About</Link>
            <Link to="/work" className="text-gray-700 transition hover:text-green-700">Our Work</Link>
            <Link to="/events" className="text-gray-700 transition hover:text-green-700">Events</Link>
            <Link to="/gallery" className="text-gray-700 transition hover:text-green-700">Gallery</Link>
            <Link to="/trustees" className="text-gray-700 transition hover:text-green-700">Trustees</Link>
            <Link to="/join-us" className="text-gray-700 transition hover:text-green-700">Join Us</Link>
            <Link to="/contact" className="rounded-full bg-green-700 px-5 py-2.5 text-white transition hover:bg-green-800">
              Contact
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="min-h-11 min-w-11 rounded-lg p-2 text-2xl text-[#173d36] transition hover:bg-[#e8f0e7] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#dce5dc] pb-5 lg:hidden">
            <div className="flex flex-col gap-2 pt-4">
              <Link to="/" onClick={() => setMenuOpen(false)} className="rounded-lg px-4 py-3.5 hover:bg-green-50">Home</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="rounded-lg px-4 py-3.5 hover:bg-green-50">About</Link>
              <Link to="/work" onClick={() => setMenuOpen(false)} className="rounded-lg px-4 py-3.5 hover:bg-green-50">Our Work</Link>
              <Link to="/events" onClick={() => setMenuOpen(false)} className="rounded-lg px-4 py-3.5 hover:bg-green-50">Events</Link>
              <Link to="/gallery" onClick={() => setMenuOpen(false)} className="rounded-lg px-4 py-3.5 hover:bg-green-50">Gallery</Link>
              <Link to="/trustees" onClick={() => setMenuOpen(false)} className="rounded-lg px-4 py-3.5 hover:bg-green-50">Trustees</Link>
              <Link to="/join-us" onClick={() => setMenuOpen(false)} className="rounded-lg px-4 py-3.5 hover:bg-green-50">Join Us</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="rounded-lg bg-[#173d36] px-4 py-3.5 text-center text-white">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar