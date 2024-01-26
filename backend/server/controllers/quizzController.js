
const Answer = require("../models/answers");
const Question = require("../models/questions");
const Quiz = require("../models/quizz");



const addQuiz = async (req, res) => {
  const { teachers_idteachers,islocked, courses_idcourse} =
    req.body;

  try {
    const newQuiz = await Quiz.create({
      teachers_idteachers,
      islocked,
      courses_idcourse,
    });
    res.status(201).json(newQuiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getAllQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findAll({});
        res.json(quiz);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
      }
  };

  // const getAllQuizby = async (req, res) => {
  //   try {
  //     const quiz = await Quiz.findOne({ where: { courses_idcourse: req.params.id } });
  //     const id = quiz.dataValues.idquizz;
  
  //     const question = await Question.findOne({ where: { quizz_idquizz: id } });
  
  //     const ids = question.dataValues.idquestions;
  //     const answers = await Answer.findAll({ where: { questions_idquestions: ids } });
  
  //     res.status(200).json({ question: question, quiz: quiz, answers: answers });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: "Server Error" });
  //   }
  // };
  const getAllQuizby = async (req, res) => {
    try {
      const quiz = await Quiz.findOne({ where: { courses_idcourse: req.params.id } });
      const id = quiz.dataValues.idquizz;
  
      const question = await Question.findAll({ where: { quizz_idquizz: id } } );
       const ids = question.dataValues.idquestions;
      // const answers = await Answer.findAll({ where: { questions_idquestions: ids } });
      const answer = await Answer.findAll({where: { questions_idquestions: ids }});
  
     
  
      res.status(200).json({ quiz: quiz, question: question,answer:answer});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  };
  
  

  const deleteQuiz = async (req, res) => {
  const { id } = req.params;
  try {
    const quiz = await Quiz.findByPk(id);
    if (!quiz) {
      return res.status(404).json({ message: "question not found" });
    }
    await Quiz.destroy();
    res.json({ message: "question deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};



module.exports = {
    getAllQuiz,
    addQuiz,
    getAllQuizby,
    deleteQuiz
  };