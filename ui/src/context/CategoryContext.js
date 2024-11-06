import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [hotelCategory, setHotelCategory] = useState();
  return (
    <CategoryContext.Provider value={{ hotelCategory, setHotelCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => {
  const context = useContext(CategoryContext);
  return context;
};

export { useCategory, CategoryContextProvider };
