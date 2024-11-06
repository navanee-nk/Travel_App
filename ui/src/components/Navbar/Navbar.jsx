import { useDate } from "../../context/DateContext";
import "./Navbar.css";

const Navbar = () => {
  const { destination, guests, checkin, checkout, dateDispatch } = useDate();
  const onSearchClick = () => {
    dateDispatch({ type: "SEARCH_MODAL" });
  };

  return (
    <header className="heading d-flex align-center">
      <h1 className="heading-1">
        <a className="link" href="/">
          TravelO
        </a>
      </h1>
      <div
        className="form-container d-flex align-center cursor-pointer shadow"
        onClick={onSearchClick}
      >
        <span className="form-option">{destination || "Any Where"}</span>
        <span className="border-right-1px"></span>
        <span className="form-option">
          {checkin && checkout
            ? `${checkin.toLocaleDateString("en-us", {
                day: "numeric",
                month: "short",
              })} - ${checkout.toLocaleDateString("en-us", {
                day: "numeric",
                month: "short",
              })}`
            : "Any Week"}
        </span>
        <span className="border-right-1px"></span>
        <span className="form-option">
          {guests ? `${guests} guests` : "Any Guests"}
        </span>
        <span className="search material-symbols-outlined">search</span>
      </div>
      <nav className="d-flex align-center gap-large">
        <div className="nav d-flex align-center cursor-pointer">
          <span className="material-symbols-outlined profile-option menu">
            menu
          </span>
          <span className="material-symbols-outlined profile-option person">
            person
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
