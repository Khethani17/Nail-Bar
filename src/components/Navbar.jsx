function Navbar() {
    return (
      <nav className="navbar">
        <div className="brand">
          <span className="brand-main">Phindi’s</span>
          <span className="brand-sub">Nail Bar</span>
        </div>
  
        <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#book">Book Appointment</a></li>
        <li><a href="#contact">Contact us</a></li>
        </ul>
      </nav>
    )
  }
  
  export default Navbar