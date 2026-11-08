import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Proof from './components/Proof.jsx'
import GriddleBoard from './components/GriddleBoard.jsx'
import LateNight from './components/LateNight.jsx'
import Reviews from './components/Reviews.jsx'
import Visit from './components/Visit.jsx'
import Footer from './components/Footer.jsx'
import StickyActions from './components/StickyActions.jsx'
import { useScrollReveal } from './hooks/useScrollReveal.js'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Proof />
        <GriddleBoard />
        <LateNight />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <StickyActions />
    </>
  )
}
