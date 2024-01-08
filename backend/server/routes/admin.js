const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/getAll", adminController.getadmin);
router.post("/add", adminController.addadmin);
router.delete("/del/:id", adminController.deleteadmin);

module.exports = router;
