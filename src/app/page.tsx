import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Problems from '../components/Problems'
import Differentials from '../components/Differentials'
import About from '../components/About'
import ServiceArea from '../components/ServiceArea'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Problems />
        <Differentials />
        <About />
        <ServiceArea />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
