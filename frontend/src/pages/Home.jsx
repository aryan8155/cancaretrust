import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StandFor from '../components/StandFor'
import About from '../components/About'
import Services from '../components/Services'
import Approach from '../components/Approach'
import Trustees from '../components/Trustees'
import JoinBanner from '../components/JoinBanner'
import Contact from '../components/Contact'
import SocialConnect from '../components/SocialConnect'
import Footer from '../components/Footer'
import CommunityFirst from '../components/CommunityFirst'
import Reveal from '../components/Reveal'
import MobileJoinButton from '../components/MobileJoinButton'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal><StandFor /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><Approach /></Reveal>
        <Reveal><CommunityFirst /></Reveal>
        <Reveal><Trustees /></Reveal>
        <Reveal><JoinBanner /></Reveal>
        <Reveal><SocialConnect /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <MobileJoinButton />
      <Footer />
    </>
  )
}

export default Home