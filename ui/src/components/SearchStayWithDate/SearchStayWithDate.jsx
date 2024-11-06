import DateSelector from "../../DateSelector/DateSelector";
import "./SearchStayWithDate.css";

const SearchStayWithDate = () => {
  return (
    <div className="destination-container">
      <div className="destination-options d-flex align-center absolute">
        <div className="location-container">
          <label className="label">where</label>
          <input
            className="input search-dest"
            placeholder="Search Destination"
          />
        </div>
        <div className="location-container">
          <label className="label">Check-In</label>
          <DateSelector checkinType="in" />
        </div>
        <div className="location-container">
          <label className="label">Chech-out</label>
          <DateSelector checkinType="out" />
        </div>
        <div className="location-container">
          <label className="label">No.of Guests</label>
          <input className="input search-dest" placeholder="Add guests" />
        </div>
        <div className="search-container d-flex align-center cursor">
          <span className="material-symbols-outlined">search</span>
          <span>search</span>
        </div>
      </div>
    </div>
  );
};

export default SearchStayWithDate;
