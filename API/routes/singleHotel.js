const express = require("express");

const router = express.Router();
const getSingleHotelHandler = require("../controllers/singleHotelController");

router.get("/hotels/:id", getSingleHotelHandler);

module.exports = router;
