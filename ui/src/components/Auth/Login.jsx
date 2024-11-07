import { useState } from "react";
import validateEmail from "../../utils/email-regex";
import validatePassword from "../../utils/password-regex";
import login from "../../services/login";
import { useAuth } from "../../context/AuthContext";
import { useAlert } from "../../context/AlertContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authDispatch } = useAuth();
  const { setAlert } = useAlert();
  const emailInputChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (validateEmail(email) && validatePassword(password)) {
      const { accessToken, username } = await login(email, password, setAlert);
      authDispatch({
        type: "SET_USER_DETAILS",
        payload: { accessToken: accessToken, username: username },
      });
    } else {
      console.log("Invalid Details..");
    }
    authDispatch({
      type: "AUTH_MODAL_TOGGLE",
    });
  };

  const onTestCred = async () => {
    const { accessToken, username } = await login(
      "abc@abc.com",
      "abcABC@1",
      setAlert
    );
    authDispatch({
      type: "SET_USER_DETAILS",
      payload: { accessToken: accessToken, username: username },
    });
    authDispatch({
      type: "AUTH_MODAL_TOGGLE",
    });
  };

  return (
    <div className="auth-container">
      <form onSubmit={onSubmitHandler}>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Email<span className="asterisk">*</span>
          </label>
          <input
            className="auth-input"
            type="email"
            placeholder="Enter Email"
            required
            onChange={emailInputChangeHandler}
            value={email}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Password<span className="asterisk">*</span>
          </label>
          <input
            className="auth-input"
            type="password"
            placeholder="Enter Password"
            required
            onChange={passwordInputChangeHandler}
            value={password}
          />
        </div>
        <button className="button btn-primary btn-login cursor-pointer">
          Login
        </button>
      </form>
      <div>
        <button
          className="button btn-outline-primary cursor-pointer"
          onClick={onTestCred}
        >
          Login with Test Credentials
        </button>
      </div>
    </div>
  );
};

export default Login;
