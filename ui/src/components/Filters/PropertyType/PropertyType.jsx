import { useFilters } from "../../../context/FilterContext";

const propertyTypes = [
  { id: 1, type: "House" },
  { id: 2, type: "Guest House" },
  { id: 3, type: "Flat" },
  { id: 4, type: "Hotel" },
];

const PropertyType = () => {
  const { propertyType, dispatchFilter } = useFilters();
  const onPropertyClickHandler = (data) => {
    dispatchFilter({ type: "PROPERTY_TYPE", payload: data });
  };
  return (
    <div className="filter-container">
      <span className="filter-label">Property Type</span>
      <div className="d-flex align-center justify-space-between gap-large">
        {propertyTypes.map(({ id, type }) => (
          <span
            className={`property-type span-label align-center justify-center onhover ${
              propertyType === type ? "selected" : ""
            }`}
            key={id}
            onClick={() => onPropertyClickHandler(type)}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PropertyType;
