const category = require("../models/categories");

const getCategoryHandler = (req, res) => {
  category
    .find({})
    .then((result) => {
      result.length > 0
        ? res.json(result)
        : res.status(404).json("No data found");
    })
    .catch((err) => {
      console.log("Could not get data");
      res.json({ message: "could not get category data" });
    });
};

module.exports = getCategoryHandler;
