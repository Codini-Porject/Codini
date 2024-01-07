const express = require("express");
const router = express.Router();

const login = require("../controllers/authController.js");
const register = require("../controllers/authController.js");

router.post("/login", login.loginUser);
router.post("/register", register.createUser);

module.exports = router;
