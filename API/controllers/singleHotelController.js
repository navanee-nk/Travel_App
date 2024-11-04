const hotel = require("../models/hotel");

const getSingleHotelHandler = (req, res) => {
    const { id } = req.params;
    hotel
      .findById(id)
      .then((result) => {
        result
          ? res.json(result)
          : res.status(404).json({ message: "Hotel not found" });
      })
      .catch((err) => {
        console.log(err);
        res.json({ message: "Could not get hotel data" });
      });
  }

module.exports = getSingleHotelHandler;