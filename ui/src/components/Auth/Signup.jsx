import { useState } from "react";
import validateEmail from "../../utils/email-regex";
import validateName from "../../utils/name-regex";
import validateNumber from "../../utils/number-regex";
import validatePassword from "../../utils/password-regex";
import signup from "../../services/signup";

const Signup = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const numberInputChangeHandler = (event) => {
    setNumber(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordInputChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (
      validateEmail(email) &&
      validateName(name) &&
      validateNumber(number) &&
      validatePassword(password) &&
      validatePassword(confirmPassword)
    ) {
      await signup(name, email, number, password);
    } else {
      console.log("Invalid Details");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={onSubmitHandler}>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Mobile <span className="asterisk">*</span>
          </label>
          <input
            type="number"
            placeholder="Enter Mobile"
            maxLength={10}
            required
            className="auth-input"
            onChange={numberInputChangeHandler}
            value={number}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Name<span className="asterisk">*</span>
          </label>
          <input
            className="auth-input"
            type="text"
            placeholder="Enter Name"
            required
            onChange={nameInputChangeHandler}
            value={name}
          />
        </div>
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
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Confirm Password<span className="asterisk">*</span>
          </label>
          <input
            className="auth-input"
            type="password"
            placeholder="Enter Password"
            required
            onChange={confirmPasswordInputChangeHandler}
            value={confirmPassword}
          />
        </div>
        <button className="button btn-primary btn-login cursor-pointer">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;
