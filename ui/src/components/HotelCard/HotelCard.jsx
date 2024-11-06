import { useNavigate } from "react-router-dom";
import "./HotelCard.css";
const HotelCard = ({ hotel }) => {
  const { _id, name, image, rating, price, address, city } = hotel;
  const navigate = useNavigate();
  const onHotelCardClick = () => {
    navigate(`/hotels/${_id}`);
  };

  return (
    <div className="relative hotelcard-container shadow cursor-pointer">
      <div onClick={onHotelCardClick}>
        <img className="img" src={image} alt={name} />
        <div className="hotelcard-details">
          <div className="d-flex align-center">
            <span className="location">
              {address}, {city}
            </span>
            <span className="rating d-flex align-center">
              <span className="material-symbols-outlined">star</span>
              <span>{rating}</span>
            </span>
          </div>
          <p className="hotel-name">{name}</p>
          <p className="price-details">
            <span className="price">Rs. {price}</span>
            <span>night</span>
          </p>
        </div>
      </div>
      <button className="button btn-wishlist absolute">
        <span className="material-symbols-outlined favourite cursor-pointer">
          favorite
        </span>
      </button>
    </div>
  );
};

export default HotelCard;
