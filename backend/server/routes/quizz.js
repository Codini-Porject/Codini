const express = require("express");
const router = express.Router();
const QuizControlleur = require("../controllers/quizzController");

router.get("/getAll", QuizControlleur.getAllQuiz);
router.get("/get/:id", QuizControlleur.getAllQuizby);
router.post("/add", QuizControlleur.addQuiz);

router.delete("/del/:id", QuizControlleur.deleteQuiz);

module.exports = router;
