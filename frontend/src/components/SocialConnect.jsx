import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/can.care.trust?stkn=MTkwbXZzc3ZxM3d0cg==&utm_source=ig_contact_invite',
    icon: FaInstagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/g/1DEHA2W4Wq/',
    icon: FaFacebookF,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@can.care.trust95',
    icon: FaYoutube,
  },
]

function SocialConnect() {
  return (
    <section className="bg-[#f4f7ef] px-6 py-16" aria-labelledby="connect-heading">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#dce5dc] bg-[#fbfcf8] px-6 py-12 text-center shadow-sm sm:px-10">
        <p className="font-semibold uppercase tracking-[0.18em] text-[#a36f18]">Connect with us</p>
        <h2 id="connect-heading" className="font-display mt-3 text-4xl font-bold text-[#173d36]">Stay connected</h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-[#65766a]">
          Follow Can Care Trust and stay connected with our work.
        </p>

        <div className="mx-auto mt-9 grid max-w-2xl gap-4 sm:grid-cols-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-28 flex-col items-center justify-center rounded-2xl border border-[#dce5dc] bg-white px-4 py-5 text-[#173d36] transition hover:-translate-y-1 hover:border-[#d49b35] hover:shadow-md"
              aria-label={`Follow Can Care Trust on ${label}`}
            >
              <Icon className="text-2xl text-[#a36f18] transition group-hover:scale-110" aria-hidden="true" />
              <span className="mt-3 font-bold">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialConnect