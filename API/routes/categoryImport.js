const express = require("express");

const router = express.Router();
const category = require("../models/categories");
const categorySeedData = require("../data/categories");
const { route } = require("./hotel");

router.get("/categoryData", (req, res) => {
  category
    .find({})
    .then((result) => {
      if (result.length <= 0) {
        return category.insertMany(categorySeedData.data);
      }
      return result;
    })
    .then((result) => {
      console.log("Category Seed data inserted successfully");
      res.json({ message: "Category seed data inserted successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "could not add category seed data to db" });
    });
});

module.exports = router;
