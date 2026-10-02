import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import Approach from '../components/Approach'
import FounderMessage from '../components/FounderMessage'

function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Approach />
        <FounderMessage />
      </main>
      <Footer />
    </>
  )
}

export default AboutPage