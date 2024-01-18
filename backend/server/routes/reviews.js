const express = require("express");
const router = express.Router();
const getAllReviews = require("../controllers/reviewsController.js");

router.get("/getAllR", getAllReviews);
module.exports = router;
