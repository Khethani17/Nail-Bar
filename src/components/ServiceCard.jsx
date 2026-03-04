const ServiceCard = ({ name, price, image }) => {
    return (
      <div className="service-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>
        <button>Book Now</button>
      </div>
    );
  };
  
  export default ServiceCard;