const express = require("express");
const router = express.Router();
const AnswerControlleur = require("../controllers/answersController");

router.get("/getAll", AnswerControlleur.getAllAnswer);
router.post("/add", AnswerControlleur.addAnswer);
router.delete("/del/:id", AnswerControlleur.deleteAnswer);

module.exports = router;
