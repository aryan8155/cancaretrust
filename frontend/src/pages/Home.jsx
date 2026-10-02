import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Approach from '../components/Approach'
import FounderMessage from '../components/FounderMessage'
import Trustees from '../components/Trustees'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <FounderMessage />
        <Trustees />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home