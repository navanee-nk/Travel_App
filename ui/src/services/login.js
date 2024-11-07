import axios from "axios";

const login = async (email, password, setAlert) => {
  try {
    const {
      data: { token: accessToken, username },
    } = await axios.post("http://localhost:3500/api/auth/login", {
      email,

      password,
    });
    localStorage.setItem("token", accessToken);
    localStorage.setItem("username", username);
    setAlert({
      open: true,
      message: "Login Successful!",
      type: "success",
    });
    return { accessToken, username };
  } catch (err) {
    console.log("Error in Login. Check your credentials");
  }
};

export default login;
