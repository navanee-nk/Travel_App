import { useEffect, useState } from "react";
import { useDate } from "../../context/DateContext";
import DateSelector from "../../DateSelector/DateSelector";
import "./SearchStayWithDate.css";
import { useCategory } from "../../context/CategoryContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchStayWithDate = () => {
  const { destination, guests, isSearchResultOpen, dateDispatch } = useDate();
  const [hotels, setHotels] = useState([]);
  const { hotelCategory } = useCategory();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        let URI = "http://localhost:3500/api/hotels";
        if (hotelCategory) {
          URI = `http://localhost:3500/api/hotels?category=${hotelCategory}`;
        }
        const res = await axios.get(URI);
        setHotels(res.data);
      } catch (err) {
        console.log(err);

        setHotels([]);
      }
    })();
  }, [hotelCategory]);

  const destinationChangeHandler = (event) => {
    dateDispatch({ type: "DESTINATION", payload: event.target.value });
  };
  const guestsChangeHandler = (event) => {
    dateDispatch({ type: "GUESTS", payload: event.target.value });
  };

  const destinationFocusHandler = () => {
    dateDispatch({ type: "SEARCH_RESULT" });
  };
  const guestsFocusHandler = () => {
    dateDispatch({ type: "OTHER_FOCUS" });
  };

  const onDestinationSelected = (address) => {
    dateDispatch({ type: "DESTINATION", payload: address });
  };

  const onSearchClickHandler = () => {
    dateDispatch({ type: "CLOSE" });
    navigate(`/hotel/${destination}`);
  };

  const destinationOptions = hotels.filter(
    ({ address, state, country, city }) =>
      address.toLowerCase().includes(destination.toLowerCase()) ||
      city.toLowerCase().includes(destination.toLowerCase()) ||
      state.toLowerCase().includes(destination.toLowerCase()) ||
      country.toLowerCase().includes(destination.toLowerCase())
  );

  return (
    <div className="destination-container">
      <div className="destination-options d-flex align-center absolute">
        <div className="location-container">
          <label className="label">where</label>
          <input
            className="input search-dest"
            placeholder="Search Destination"
            onChange={destinationChangeHandler}
            value={destination}
            autoFocus
            onFocus={destinationFocusHandler}
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
          <input
            className="input search-dest"
            placeholder="Add guests"
            onChange={guestsChangeHandler}
            onFocus={guestsFocusHandler}
            value={guests}
          />
        </div>
        <div
          className="search-container d-flex align-center cursor"
          onClick={onSearchClickHandler}
        >
          <span className="material-symbols-outlined">search</span>
          <span>search</span>
        </div>
      </div>
      {isSearchResultOpen && (
        <div className="search-result-container absolute">
          {destinationOptions.length > 0 &&
            destinationOptions.map(({ address, city }) => (
              <p
                key={address}
                className="p cursor-pointer"
                onClick={() => onDestinationSelected(address)}
              >
                {address}, {city}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchStayWithDate;
