import ServiceCard from "./ServiceCard";
import service1 from "../assets/service1.jpeg";
import service2 from "../assets/service2.jpeg";
import service3 from "../assets/service3.jpeg";
import BookAppointment from "./BookAppointment";

const services = [
  {
    id: 1,
    name: "Gel Overlay",
    price: "R250",
    image: service1
  },
  {
    id: 2,
    name: "Acrylic Full Set",
    price: "R350",
    image: service2
  },
  {
    id: 3,
    name: "Pedicure",
    price: "R200",
    image: service3
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            price={service.price}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;