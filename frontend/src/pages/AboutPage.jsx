import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import Approach from '../components/Approach'
import StandFor from '../components/StandFor'

function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <StandFor />
        <About />
        <Approach />
      </main>
      <Footer />
    </>
  )
}

export default AboutPage