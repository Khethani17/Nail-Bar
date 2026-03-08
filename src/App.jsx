import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Services from "./components/Services";
import BookAppointment from "./components/BookAppointment";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <div className="App">

      <Navbar />

      <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/services" element={<Services />} />
      <Route path="/book" element={<BookAppointment />} />
      </Routes>
      <Footer/>

      <div className="main">
      
      </div>
    </div>
  )
}

export default App