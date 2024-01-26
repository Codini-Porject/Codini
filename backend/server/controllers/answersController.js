const Answers = require("../models/answers");



const addAnswer = async (req, res) => {
  console.log(req.body)
  try {
    const newAnswer = await Answers.bulkCreate(req.body)
    res.status(201).json(newAnswer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getAllAnswer = async (req, res) => {
    try {
        const Answer = await Answers.findAll({});
        res.json(Answer);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
      }
  };

  const deleteAnswer = async (req, res) => {
  const { id } = req.params;
  try {
    const Answer = await Answers.findByPk(id);
    if (!Answer) {
      return res.status(404).json({ message: "question not found" });
    }
    await Answer.destroy();
    res.json({ message: "question deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};



module.exports = {
    getAllAnswer,
    addAnswer,
    deleteAnswer
  };