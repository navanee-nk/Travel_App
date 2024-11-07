import { useNavigate } from "react-router-dom";
import "./HotelCard.css";
import { useWishlist } from "../../context/WishListContext";
import { useAuth } from "../../context/AuthContext";
const HotelCard = ({ hotel }) => {
  const { _id, name, image, rating, price, address, city } = hotel;
  const { wishlist, wishlistDispatch } = useWishlist();
  const { accessToken, authDispatch } = useAuth();
  const isHotelInWishList = wishlist.some((htl) => htl._id === _id);
  const navigate = useNavigate();
  const onHotelCardClick = () => {
    navigate(`/hotels/${_id}`);
  };

  const onWishListClickHandler = () => {
    if (accessToken) {
      if (isHotelInWishList) {
        wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: _id });
      } else {
        wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: hotel });
      }
    } else {
      authDispatch({ type: "AUTH_MODAL_TOGGLE" });
    }
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
      <button
        className="button btn-wishlist absolute"
        onClick={onWishListClickHandler}
      >
        <span
          className={`material-symbols-outlined favourite cursor-pointer ${
            isHotelInWishList ? "fav-selected" : ""
          }`}
        >
          favorite
        </span>
      </button>
    </div>
  );
};

export default HotelCard;
