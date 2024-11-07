import { createContext, useContext, useReducer } from "react";
import authReducer from "../Reducer/authReducer";

const initialState = {
  isAuthModalOpen: false,
  selectedTab: "login",
  username: "",
  accessToken: "",
};

const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
  const [
    { isAuthModalOpen, selectedTab, username, accessToken },
    authDispatch,
  ] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        isAuthModalOpen,
        selectedTab,
        username,
        accessToken,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { useAuth, AuthContextProvider };
