import { useDate } from "../../context/DateContext";
import DateSelector from "../../DateSelector/DateSelector";
import "./FinalPrice.css";

const FinalPrice = ({ singleHotel }) => {
  const { guests, dateDispatch } = useDate();
  const { price, rating } = singleHotel;
  const onGuestChange = (event) => {
    dateDispatch({ type: "GUESTS", payload: event.target.value });
  };
  return (
    <div className="price-details-container d-flex direction-column gap shadow">
      <div className="price-rating d-flex align-center justify-space-between">
        <p>
          <span className="fs-bold fs-large">Rs. {price}</span> night
        </p>
        <span className="rating d-flex align-center">
          <span className="material-icons-outlined">star</span>
          <span>{rating}</span>
        </span>
      </div>
      <div className="d-flex direction-column">
        <div className="grid-container-two-col selected-dates">
          <div className="checkin loc-container">
            <label className="label">Check in</label>
            <DateSelector checkinType="in" />
          </div>
          <div className="checkin loc-container">
            <label className="label">Check Out</label>
            <DateSelector checkinType="out" />
          </div>
        </div>
        <div className="guests gutter-sm">
          <p>GUESTS</p>
          <input
            type="number"
            placeholder="Add Guests"
            value={guests}
            onChange={onGuestChange}
          />
        </div>
      </div>
      <div>
        <button className="button btn-reserve btn-primary cursor">
          Reserve
        </button>
      </div>
      <div className="price-distribution d-flex direction-column">
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Rs. {price} x 2 nights</span>
          <span className="span">Rd. {price * 2}</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Service fee</span>
          <span className="span">Rd. 200</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Total</span>
          <span className="span">Rs. {price * 2 + 200}</span>
        </div>
      </div>
    </div>
  );
};

export default FinalPrice;
