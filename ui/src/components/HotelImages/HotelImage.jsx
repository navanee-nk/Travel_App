import "./HotelImage.css";

const HotelImage = ({ hotel }) => {
  const { image, imageArr } = hotel;
  return (
    <div className="image-container d-flex gap-small">
      <div className="primay-img-container">
        <img className="primary-img" src={image} alt="primary-hotel-img" />
      </div>
      <div className="d-flex wrap gap-small">
        {imageArr.length > 0 &&
          imageArr.map((image) => (
            <img className="hotel-img" src={image} alt="hotel-image" />
          ))}
      </div>
    </div>
  );
};

export default HotelImage;
