

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-tabs">
        <a href="/">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/resume">Resume</a>
      </div>
      <h1>Navbar</h1>
      <div className="contact-tab">
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
