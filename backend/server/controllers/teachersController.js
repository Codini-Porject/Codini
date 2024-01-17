const Teacher = require("../models/teachers.js");

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll({});
    res.json(teachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getOneTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findOne({
      where: { idteachers:req.params.id },
    });
    res.json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const deleteOneTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await Teacher.findOne({
      where: { idteachers: id },
    });
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    await teacher.destroy();
    res.json({ message: "Teacher deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const addOneTeacher = async (req, res) => {
  try {
    const { name, email, password, image, review, accepted } = req.body;
    const newTeacher = await Teacher.create({
      name,
      email,
      password,
      image,
      review,
      accepted,
    });
    res.status(201).json(newTeacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const updateTeacher = async (req, res) => {
    const { id } = req.params;
    const { name, password,desc, image ,review ,accepted} = req.body;
    try {
      const teacher = await Teacher.findByPk(id);
      await teacher.update({ name, password,desc, image ,review ,accepted });
      console.log(req.body);
      res.json({ message: "Teacher updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  };


module.exports = {
  getAllTeachers,
  getOneTeacher,
  deleteOneTeacher,
  addOneTeacher,
    updateTeacher,
};
