const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const loginHandler = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).json({ message: "Invalid email..." });
  
      const decodedPassword = cryptoJs.AES.decrypt(
        user.password,
        process.env.PASSWORD_SECRET
      ).toString(cryptoJs.enc.Utf8);
  
      req.body.password !== decodedPassword &&
        res.status(404).json({ message: "Invalid password..." });
  
      const { password, ...rest } = user._doc;
  
      const token = jwt.sign(
        { username: user.username },
        process.env.ACCESS_TOKEN
      );
  
      res.json({ ...rest, token });
    } catch (err) {
      res.status(500).json({ message: "Error in user login" });
    }
  }

module.exports = loginHandler;