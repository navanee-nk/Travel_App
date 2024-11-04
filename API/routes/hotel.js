const express = require("express");

const router = express.Router();

const getAllHotelsHandler = require("../controllers/hotelController");

router.get("/hotels", getAllHotelsHandler);

module.exports = router;
