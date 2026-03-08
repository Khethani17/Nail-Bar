import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Hero = () => {

  const text = "Experience flawless nails, expert care, and a touch of luxury in every appointment.";

  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index <text.length){
     const timeout = setTimeout(() => {
         setTypedText((prev) => prev + text[index]);
         setIndex(index + 1);
     }, 80);

     return () => clearTimeout(timeout);
    }
 }, [index, text]);
    return ( 
    <section id="home" className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Where Beauty Meets Precision</h1>
          <p>{typedText}</p>
          <Link to="/book" className="book-btn">Book Appointment</Link>
        </div>
      </div>
    </section>
     );
}
 
export default Hero;