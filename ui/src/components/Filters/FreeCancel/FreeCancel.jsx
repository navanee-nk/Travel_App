import { useFilters } from "../../../context/FilterContext";
import "./FreeCancel.css";

const FreeCancel = () => {
  const { isCancellable, dispatchFilter } = useFilters();
  const onFreeCancelChecked = (event) => {
    dispatchFilter({ type: "CANCELLABLE", payload: event.target.checked });
  };
  return (
    <div className="filter-container">
      <div className="d-flex align-center gap-large">
        <span className="filter-label">Free Cancelation</span>
        <label className="slide">
          <input
            type="checkbox"
            onChange={onFreeCancelChecked}
            value={isCancellable}
            checked={isCancellable}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default FreeCancel;
