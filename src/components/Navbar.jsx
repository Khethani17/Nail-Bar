import { Link } from "react-router-dom"

function Navbar() {
    return (
      <nav className="navbar">
        <div className="brand">
          <span className="brand-main">Phindi’s</span>
          <span className="brand-sub">Nail Bar</span>
        </div>
  
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/book">Book Appointment</Link></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
      </nav>
    )
  }
  
  export default Navbar