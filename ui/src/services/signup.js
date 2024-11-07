import axios from "axios";

const signup = async (username, email, number, password) => {
  try {
    const data = await axios.post("http://localhost:3500/api/auth/register", {
      username,
      email,
      number,
      password,
    });
    console.log(data);
  } catch (err) {
    console.log("Error in creating account..");
  }
};

export default signup;
