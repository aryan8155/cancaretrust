import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../components/Services'

function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-green-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <p className="font-semibold uppercase tracking-wider text-green-700">Our Work</p>
            <h1 className="mt-3 text-5xl font-bold text-gray-900">Creating meaningful change</h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-600">
              Our initiatives focus on supporting vulnerable communities, empowering
              women, promoting education, and protecting the environment.
            </p>
          </div>
        </section>
        <Services />
      </main>
      <Footer />
    </>
  )
}

export default ProjectsPage