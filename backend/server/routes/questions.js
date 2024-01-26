const express = require("express");
const router = express.Router();
const QuestionController = require("../controllers/questionsController");

router.get("/getAll", QuestionController.getAllQuestions);
router.get("/getOne/:id", QuestionController.getOneQuestion);
// router.put("/upd/:id", QuestionController.updateQuestion);
router.post("/add", QuestionController.addQuestion);
// router.delete("/del/:id", QuestionController.deleteOneQuestion);

module.exports = router;
