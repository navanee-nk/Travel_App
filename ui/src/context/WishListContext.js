import { createContext, useContext, useReducer } from "react";

import wishlistReducer from "../Reducer/wishlistReducer";

const initialState = {
  wishlist: [],
};

const WishListContext = createContext(initialState);

const WishListProvider = ({ children }) => {
  const [{ wishlist, wishlistDispatch }] = useReducer(
    wishlistReducer,
    initialState
  );
  return (
    <WishListContext.Provider value={{ wishlist, wishlistDispatch }}>
      {children}
    </WishListContext.Provider>
  );
};

const useWishlist = () => {
  const context = useContext(WishListContext);
  return context;
};

export { useWishlist, WishListProvider };
