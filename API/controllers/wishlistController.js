const Wishlist = require("../models/wishlist");

const getWishlisthandler = async (req, res) => {
  try {
    const wishlist = await Wishlist.find({});
    wishlist.length > 0
      ? res.json(wishlist)
      : res.status(404).json({ message: "No wishlist found" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Could not get wishlist" });
  }
};

const deletWishlisthandler = async (req, res) => {
  try {
    const { id } = req.params;
    await Wishlist.findByIdAndDelete(id);
    res.json({ message: "Deletion successfull" });
  } catch (err) {
    console.log(err);
    res.json({ message: "Could not delete the hotel in wishlist" });
  }
};

const addWishlistHandler = async (req, res) => {
  try {
    const wishList = new Wishlist({ hotelId: req.body.id });
    const savedList = await wishList.save();
    res.status(201).json(savedList);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Could not add hotel to wishList" });
  }
};

module.exports = {
  getWishlisthandler,
  deletWishlisthandler,
  addWishlistHandler,
};
