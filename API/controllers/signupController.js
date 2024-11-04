const cryptoJs = require("crypto-js");
const User = require("../models/user");

const signUpHandler = async (req, res) => {
  console.log(req.body);
  try {
    const newUser = new User({
      username: req.body.username,
      number: req.body.number,
      email: req.body.email,
      password: cryptoJs.AES.encrypt(
        req.body.password,
        process.env.PASSWORD_SECRET
      ).toString(),
    });

    const saveduser = await newUser.save();
    res.status(201).json(saveduser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in user registration" });
  }
};

module.exports = signUpHandler;
