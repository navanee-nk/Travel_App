const express = require("express");
const router = express.Router();
const signUpHandler = require("../controllers/signupController");
const loginHandler = require("../controllers/loginController");
const dotenv = require("dotenv");

dotenv.config();
router.post("/auth/register", signUpHandler);

router.post("/auth/login", loginHandler);

module.exports = router;
