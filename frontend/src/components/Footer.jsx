function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold">Can Care Trust</h2>
            <p className="mt-4 leading-relaxed text-gray-400">
              Working towards a caring, inclusive, and empowered society through
              grassroots action and community participation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-3 text-gray-400">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#work" className="hover:text-white">Our Work</a>
              <a href="#trustees" className="hover:text-white">Trustees</a>
              <a href="/join-us" className="hover:text-white">Join Us</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Social</h3>
            <div className="mt-4 flex flex-col gap-3 text-gray-400">
              <a href="https://www.instagram.com/can.care.trust?stkn=MTkwbXZzc3ZxM3d0cg==&utm_source=ig_contact_invite" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://www.facebook.com/share/g/1DEHA2W4Wq/" target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a>
              <a href="https://www.youtube.com/@can.care.trust95" target="_blank" rel="noreferrer" className="hover:text-white">YouTube</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-4 text-gray-400">Delhi, India</p>
            <p className="mt-2 break-all text-gray-400">cancaretrust.delhi@gmail.com</p>
            <p className="mt-2 text-gray-400">+91 87002 71847</p>

          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Can Care Trust. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer