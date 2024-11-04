const hotel = require("../models/hotel");

const getAllHotelsHandler = async (req, res) => {
  const category = req.query.category;
  try {
    let hotels;
    if (category) {
      hotels = await hotel.find({ category: category });
    } else {
      hotels = await hotel.find({});
    }
    hotels.length > 0
      ? res.json(hotels)
      : res.status(404).json({ messgae: "No Data Found" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = getAllHotelsHandler;
