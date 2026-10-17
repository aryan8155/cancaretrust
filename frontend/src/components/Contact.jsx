function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-wide text-green-600">Contact Us</p>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              Let&apos;s work together for a better tomorrow
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              If you would like to learn more about Can Care Trust, support our work, or
              collaborate with us, get in touch.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:cancaretrust.delhi@gmail.com" className="font-semibold text-green-700">
                    <span className="break-all">cancaretrust.delhi@gmail.com</span>
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <a href="tel:+918700271847" className="font-semibold text-green-700">
                  +91 87002 71847
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-gray-800">Delhi, India</p>
              </div>
            </div>
          </div>

          <form className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
                <input id="name" type="text" placeholder="Your name" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
                <input id="email" type="email" placeholder="Your email" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
                <textarea id="message" rows="5" placeholder="Your message" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"></textarea>
              </div>
              <button type="submit" className="w-full rounded-lg bg-green-600 py-3 text-white transition hover:bg-green-700">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact