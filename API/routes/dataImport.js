const express = require("express");

const router = express.Router();

const hotel = require("../models/hotel");
const hotelSeedData = require("../data/hotels");

router.get("/hoteldata", (req, res) => {
  hotel
    .find({})
    .then((result) => {
      if (result.length <= 0) {
        return hotel.insertMany(hotelSeedData.data);
      }
      return result;
    })
    .then((result) => {
      console.log("Data inserted successfully");
      res.json({ message: "Data inserted successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ messgae: "could not add data" });
    });
});

module.exports = router;
