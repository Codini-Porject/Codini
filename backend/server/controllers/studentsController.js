const Student = require("../models/students");

const getAllStudents = async (req, res) => {
  try {
    const student = await Student.findAll({});
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getOneStudent = async (req, res) => {
  try {
    const student = await Student.findOne({
      where: { idstudents: req.params.id },
    });
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const deleteOneStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findOne({
      where: { idstudents: id },
    });
    await student.destroy();
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const addOneStudent = async (req, res) => {
  try {
    const { name, email, password, image, Phrases, level } = req.body;
    const newStudent = await Student.create({
      name,
      email,
      password,
      image,
      Phrases,
      level,
    });
    res.status(201).json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, password, image, Phrases, level } = req.body;
  try {
    const student = await Student.findByPk(id);

    if (password) {
      await student.update({ name, password, image, Phrases, level });
    } else {
      await student.update({ name, desc, image, Phrases, level });
    }

    res.json({ message: "Student updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getAllStudents,
  getOneStudent,
  deleteOneStudent,
  addOneStudent,
  updateStudent,
};
