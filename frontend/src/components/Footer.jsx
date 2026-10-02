import { FaFacebookF, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
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
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#about" className="hover:text-white">About Us</a>
              <a href="#work" className="hover:text-white">Our Work</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-4 text-gray-400">Delhi, India</p>
            <p className="mt-2 text-gray-400">cancaretrust.delhi@gmail.com</p>
            <p className="mt-2 text-gray-400">+91 87002 71847</p>

            <div className="mt-5 flex gap-4">
              <a
                href="https://www.facebook.com/share/g/1DEHA2W4Wq/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-400 transition hover:text-white"
                aria-label="Can Care Trust on Facebook"
              >
                <FaFacebookF aria-hidden="true" />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/can.care.trust?stkn=MTkwbXZzc3ZxM3d0cg==&utm_source=ig_contact_invite"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-400 transition hover:text-white"
                aria-label="Can Care Trust on Instagram"
              >
                <FaInstagram aria-hidden="true" />
                Instagram
              </a>
            </div>
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