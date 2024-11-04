import "./HotelCard.css";
const HotelCard = () => {
  return (
    <div className="relative hotelcard-container shadow cursor-pointer">
      <div>
        <img
          className="img"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720"
          alt="A hotel card"
        />
        <div className="hotelcard-details">
          <div className="d-flex align-center">
            <span className="location">Bir, Himachal Pradesh</span>
            <span className="rating d-flex align-center">
              <span className="material-symbols-outlined">star</span>
              <span>4.3</span>
            </span>
          </div>
          <p className="hotel-name">Sukoon Bag</p>
          <p className="price-details">
            <span className="price">Rs. 3500</span>
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
