import { useFilters } from "../../context/FilterContext";
import Amenities from "./Amenities/Amenities";
import "./Filter.css";
import FreeCancel from "./FreeCancel/FreeCancel";
import PriceRange from "./PriceRange/PriceRange";
import PropertyType from "./PropertyType/PropertyType";
import Ratings from "./Ratings/Rating";

const Filter = () => {
  const { dispatchFilter } = useFilters();
  const onFilterModalClose = () => {
    dispatchFilter({ type: "FILTER_MODAL_TOGGLE" });
  };
  const onClearClickHandler = () => {
    dispatchFilter({ type: "CLEAR_ALL" });
  };
  const onApplyClickHandler = () => {
    dispatchFilter({ type: "APPLY", payload: true });
  };
  return (
    <div className="filter-modal">
      <div className="filter-page shadow absolute">
        <div className="d-flex justify-space-between align-center">
          <span>Filter</span>
          <button
            className="button btn-close cursor-pointer d-flex align-center justify-center"
            onClick={onFilterModalClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <PriceRange />
        <Amenities />
        <PropertyType />
        <Ratings />
        <FreeCancel />
        <div className="d-flex align-center justify-space-between">
          <button
            className="button btn-link-primary cursor"
            onClick={onClearClickHandler}
          >
            Clear All
          </button>
          <button
            className="button btn-primary cursor btn-apply"
            onClick={onApplyClickHandler}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
