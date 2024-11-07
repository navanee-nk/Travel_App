import { useFilters } from "../../../context/FilterContext";

const numRatings = ["1", "2", "3", "4", "5"];

const Ratings = () => {
  const { ratings, dispatchFilter } = useFilters();
  const onRatingClickHandler = (data) => {
    dispatchFilter({ type: "RATINGS", payload: data });
  };
  return (
    <div className="filter-container">
      <span className="filter-label">Ratings</span>
      <div className="d-flex align-center justify-space-between gap-large">
        {numRatings.map((rating) => (
          <span
            className={`rating span-label amenity-count d-flex align-center justify-center onhover cursor-pointer ${
              ratings.toString() === rating ? "selected" : ""
            }`}
            key={rating}
            onClick={() => onRatingClickHandler(rating)}
          >
            {rating} &up
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
