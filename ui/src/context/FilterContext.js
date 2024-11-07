import { createContext, useContext, useReducer } from "react";
import filterReducer from "../Reducer/filterReducer";

const initialState = {
  isFilerModalOpen: false,
  priceRange: [300, 20000],
  noOfBedrooms: "Any",
  noOfBeds: "Any",
  noOfBathrooms: "Any",
  propertyType: "House",
  ratings: 0,
  isCancellable: true,
  apply: false,
};

const FilterContext = createContext(initialState);

const FilterContextProvider = ({ children }) => {
  const [
    {
      isFilerModalOpen,
      priceRange,
      noOfBedrooms,
      noOfBeds,
      noOfBathrooms,
      propertyType,
      ratings,
      isCancellable,
      apply,
    },
    dispatchFilter,
  ] = useReducer(filterReducer, initialState);
  return (
    <FilterContext.Provider
      value={{
        isFilerModalOpen,
        priceRange,
        noOfBedrooms,
        noOfBathrooms,
        noOfBeds,
        propertyType,
        ratings,
        isCancellable,
        apply,
        dispatchFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilters = () => {
  const context = useContext(FilterContext);
  return context;
};

export { useFilters, FilterContextProvider };
