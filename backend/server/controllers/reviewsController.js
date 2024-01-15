const Review = require("../models/reviews.js");

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
module.exports=getAllReviews;