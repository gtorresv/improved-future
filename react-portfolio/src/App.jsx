import { useState } from 'react'
import About from './pages/About'
import Navbar from './components/Navbar'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentpage] = useState('home');
  const onPageChange = () => {
    if (currentPage === 'about') {
      return <About />
    } else if (currentPage === 'portfolio') {
      return <Portfolio />
    } else if (currentPage === 'contact') {
      return <Contact />
    } else if (currentPage === 'resume') {
      return <Resume />
    }
  }
  return (
    <div>
      <Navbar setCurrentpage={setCurrentpage}/>
      {onPageChange()}
      <Footer setCurrentpage={setCurrentpage}/>
      {onPageChange()}
    </div>
  )
}

export default App
