const Course = require("../models/courses.js");
const Teacher = require("../models/teachers.js");

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
const getCourseByteacher = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findAll({where :{teachers_idteachers:id}});
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};


const updateCourse = async (req, res) => {
  const { id } = req.params;
  const { desc, price, rate } = req.body;
  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    await course.update({ desc, price, rate });
    res.json({ message: "Course updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    await course.destroy();
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const addCourse = async (req, res) => {
  const { teachers_idteachers, desc, price, rate,image, languages_idlanguages } =
  req.body;

  console.log(req.body);

  // const { role } = req.user;

  try {

    const newCourse = await Course.create({
      teachers_idteachers,
      desc,
      price,
      rate,
      image,
      languages_idlanguages,
    });
    res.status(201).json(newCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  addCourse,
  getCourseByteacher
};
