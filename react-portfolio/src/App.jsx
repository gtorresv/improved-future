import { useState } from 'react'
import Home from './pages/Home'
import { Navbar } from './components/Navbar'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  const [currentPage, setCurrentpage] = useState('home');
  const onPageChange = () => {
    if (currentPage === 'home') {
      return <Home />
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
    </div>
  )
}

export default App
