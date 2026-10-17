import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import defencePhoto from '../assets/defence.jpeg'
import defencePhoto2 from '../assets/defence2.jpeg'
import defencePhoto3 from '../assets/defence3.jpeg'
import health1 from '../assets/health1.jpeg'
import health2 from '../assets/health2.jpeg'
import health3 from '../assets/health3.jpeg'

const photos = [
  [health1, 'Health camp · Community care'],
  [health2, 'Health camp · Community care'],
  [health3, 'Health camp · Community care'],
  [defencePhoto, 'Self-defence training · Women and girls empowerment'],
  [defencePhoto2, 'Self-defence training · Women and girls empowerment'],
  [defencePhoto3, 'Self-defence training · Women and girls empowerment'],
]

function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#f4f7ef] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#a36f18]">Gallery</p>
            <h1 className="font-display mt-3 text-5xl font-bold text-[#173d36]">Our work in action</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">A visual record of care, participation, and community-led action.</p>
          </div>
        </section>
        <section className="bg-[#fbfcf8] px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map(([photo, caption]) => (
              <figure key={photo} className="overflow-hidden rounded-2xl border border-[#dce5dc] bg-white shadow-sm">
                <img src={photo} alt={caption} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="px-5 py-4 text-sm font-semibold text-[#173d36]">{caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default GalleryPage