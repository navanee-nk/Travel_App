import { createContext, useContext, useReducer } from "react";
import dateReducer from "../Reducer/dateReducer";

const initialState = {
  checkin: null,
  checkout: null,
  isSearchModal: false,
};

const DateContext = createContext(initialState);

const DateContextProvider = ({ children }) => {
  const [{ checkin, checkout, isSearchModal }, dateDispatch] = useReducer(
    dateReducer,
    initialState
  );

  return (
    <DateContext.Provider
      value={{ checkin, checkout, isSearchModal, dateDispatch }}
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
