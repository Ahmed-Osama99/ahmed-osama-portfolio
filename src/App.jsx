import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-headline focus:shadow-lg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection/>
        <About/>
        <Skills/>
        <Projects/>
      </main>
      <Footer/>
    </>
  )
}

export default App
