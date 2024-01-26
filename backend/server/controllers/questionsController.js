const Question = require("../models/questions.js");
const Teacher = require("../models/teachers.js");

const getAllQuestions = async (req, res) => {
  try {
    const question = await Question.findAll({});
    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getOneQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    const question = await Question.findByPk(id);
    if (!question) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// const updateQuestion = async (req, res) => {
//   const { id } = req.params;
//   const { desc, price, rate } = req.body;
//   try {
//     const question = await Question.findByPk(id);
//     if (!question) {
//       return res.status(404).json({ message: "Course not found" });
//     }
//     await course.update({ desc, price, rate });
//     res.json({ message: "question updated successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server Error" });
//   }
// };

// const deleteQuestion = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const question = await Question.findByPk(id);
//     if (!question) {
//       return res.status(404).json({ message: "question not found" });
//     }
//     await Question.destroy();
//     res.json({ message: "question deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server Error" });
//   }
// };

const addQuestion = async (req, res) => {
  const {  question, quizz_idquizz ,rightOption } =
    req.body;

  try {
    const newQuestion = await Question.create({
      question,
      quizz_idquizz,
      rightOption
    });
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getAllQuestions,
  getOneQuestion,
//   updateQuestion,
//   deleteCourse,
addQuestion,
};
