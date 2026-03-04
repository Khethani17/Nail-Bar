import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import BookAppointment from "./Components/BookAppointment";
import Footer from "./Components/Footer";

function App() {
  return (
    
    <div className="App">

      <Navbar />
      <Hero />
      <Services />
      <BookAppointment />
      <Footer/>

      <div className="main">
      
      </div>
    </div>
  )
}

export default App