import About from './pages/About'
import Navbar from './components/Navbar'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='about-section'>
        <About />
      </div>
      <div className='about-section'>
        <Portfolio />
      </div>
      <div className='about-section'>
        <Resume />
      </div>
      <div className='about-section'>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
