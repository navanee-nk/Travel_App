const express = require("express");
const router = express.Router();
const getCategoryHandler = require("../controllers/categoryController");

router.get("/category", getCategoryHandler);

module.exports = router;
