import { useAuth } from "../../context/AuthContext";
import "./Auth.css";
import "./AuthModal.css";
import Login from "./Login";
import Signup from "./Signup";
const AuthModal = () => {
  const { authDispatch, selectedTab } = useAuth();

  const onLoginSetHandler = () => {
    authDispatch({ type: "SET_LOGIN" });
  };
  const onSignupSetHandler = () => {
    authDispatch({ type: "SET_SIGNUP" });
  };

  const onCloseClick = () => {
    authDispatch({ type: "AUTH_MODAL_TOGGLE" });
  };
  return (
    <div className="auth-modal-container fixed">
      <div className="auth-modal absolute right-0">
        <div className="d-flex align-center shadow">
          <button
            className={`button btn-auth grow-shrink-basis cursor-pointer ${
              selectedTab === "login" ? "btn-auth-selected" : ""
            }`}
            onClick={onLoginSetHandler}
          >
            Login
          </button>
          <button
            className={`button btn-auth grow-shrink-basis cursor-pointer ${
              selectedTab === "signup" ? "btn-auth-selected" : ""
            }`}
            onClick={onSignupSetHandler}
          >
            SignUp
          </button>
          <button
            className="button btn-auth grow-shrink-basis cursor-pointer d-flex align-center justify-center"
            onClick={onCloseClick}
          >
            <span className="material-symbols-oulined">close</span>
          </button>
        </div>
        <div>{selectedTab === "login" ? <Login /> : <Signup />}</div>
      </div>
    </div>
  );
};

export default AuthModal;
