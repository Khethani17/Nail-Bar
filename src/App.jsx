import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Services from "./components/Services";
import BookAppointment from "./components/BookAppointment";
import Footer from "./components/Footer";

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