const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "FILTER_MODAL_TOGGLE":
      return {
        ...state,
        isFilerModalOpen: !state.isFilerModalOpen,
      };
    case "MINIMUM_PRICE":
      return {
        ...state,
        priceRange: [
          Math.min(
            payload.newValue[0],
            payload.priceRange[1] - payload.minDifference
          ),
          payload.priceRange[1],
        ],
      };
    case "MAXIMUM_PRICE":
      return {
        ...state,
        priceRange: [
          payload.priceRange[0],
          Math.max(
            payload.newValue[1],
            payload.priceRange[0] + payload.minDifference
          ),
        ],
      };
    case "BEDROOMS":
      return {
        ...state,
        noOfBedrooms: payload === "Any" ? payload : Number(payload),
      };
    case "BATHROOMS":
      return {
        ...state,
        noOfBathrooms: payload === "Any" ? payload : Number(payload),
      };
    case "BEDS":
      return {
        ...state,
        noOfBeds: payload === "Any" ? payload : Number(payload),
      };
    case "PROPERTY_TYPE":
      return {
        ...state,
        propertyType: payload,
      };
    case "RATINGS":
      return {
        ...state,
        ratings: Number(payload),
      };
    case "CANCELLABLE":
      return {
        ...state,
        isCancellable: payload,
      };
    case "CLEAR_ALL":
      return {
        ...state,
        priceRange: [300, 20000],
        noOfBedrooms: "Any",
        noOfBeds: "Any",
        noOfBathrooms: "Any",
        propertyType: "House",
        ratings: 0,
        isCancellable: true,
      };
    case "APPLY":
      return {
        ...state,
        isFilerModalOpen: !state.isFilerModalOpen,
        apply: payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
