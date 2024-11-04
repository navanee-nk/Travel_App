const express = require("express");
const router = express.Router();

const verifyUser = require("../middleware/verifyUser");
const {
  addWishlistHandler,
  deletWishlisthandler,
  getWishlisthandler,
} = require("../controllers/wishlistController");

router.post("/wishlist", verifyUser, addWishlistHandler);

router.delete("/wishlist/:id", verifyUser, deletWishlisthandler);

router.get("/wishlist", verifyUser, getWishlisthandler);

module.exports = router;
