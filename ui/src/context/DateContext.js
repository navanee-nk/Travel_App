import { createContext, useContext, useReducer } from "react";
import dateReducer from "../Reducer/dateReducer";

const initialState = {
  destination: "",
  guests: 0,
  checkin: null,
  checkout: null,
  isSearchModal: false,
  isSearchResultOpen: true,
};

const DateContext = createContext(initialState);

const DateContextProvider = ({ children }) => {
  const [
    {
      destination,
      guests,
      isSearchResultOpen,
      checkin,
      checkout,
      isSearchModal,
    },
    dateDispatch,
  ] = useReducer(dateReducer, initialState);

  return (
    <DateContext.Provider
      value={{
        destination,
        guests,
        isSearchResultOpen,
        checkin,
        checkout,
        isSearchModal,
        dateDispatch,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

const useDate = () => {
  const context = useContext(DateContext);
  return context;
};

export { useDate, DateContextProvider };
