import { useFilters } from "../../../context/FilterContext";

const numOfAmenities = ["Any", "1", "2", "3", "4", "5"];

const Amenities = () => {
  const { noOfBathrooms, noOfBedrooms, noOfBeds, dispatchFilter } =
    useFilters();

  console.log(noOfBathrooms);

  const onBedroomsClickHandle = (data) => {
    dispatchFilter({ type: "BEDROOMS", payload: data });
  };
  const onBedsClickHandle = (data) => {
    console.log("beds", data);
    dispatchFilter({ type: "BEDS", payload: data });
  };
  const onBathroomsClickHandle = (data) => {
    dispatchFilter({ type: "BATHROOMS", payload: data });
  };
  return (
    <div className="filter-container">
      <span className="filter-label">Rooms And Beds</span>
      <div className="d-flex justify-space-between align-center gap-large">
        <div className="d-flex direction-column gap">
          <span className="span-label">Bedrooms</span>
          <span className="span-label">Beds</span>
          <span className="span-label">Bathrooms</span>
        </div>
        <div className="d-flex direction-column gap">
          <div>
            {numOfAmenities.map((data) => (
              <span
                className={`span-label amenity-count cursor-pointer onhover ${
                  noOfBedrooms.toString() === data ? "selected" : ""
                }`}
                key={data}
                onClick={() => onBedroomsClickHandle(data)}
              >
                {data}
              </span>
            ))}
          </div>
          <div>
            {numOfAmenities.map((data) => (
              <span
                className={`span-label amenity-count cursor-pointer onhover ${
                  noOfBeds.toString() === data ? "selected" : ""
                }`}
                key={data}
                onClick={() => onBedsClickHandle(data)}
              >
                {data}
              </span>
            ))}
          </div>
          <div>
            {numOfAmenities.map((data) => (
              <span
                className={`span-label amenity-count cursor-pointer onhover ${
                  noOfBathrooms.toString() === data ? "selected" : ""
                }`}
                key={data}
                onClick={() => onBathroomsClickHandle(data)}
              >
                {data}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
