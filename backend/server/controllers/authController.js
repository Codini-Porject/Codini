const { log } = require("console");
const Student = require("../models/students.js");
const Teacher = require("../models/teachers.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");

const generateToken = (userId, userName, role) => {
  const expiresIn = 60 * 60 * 24 * 7;
  return jwt.sign({ userId, userName, role }, "secretKey", {
    expiresIn: expiresIn,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    let user = await Teacher.findOne({ where: { email: email } });
    // console.log("test",user);
    if (!user) {  
      console.log('hi');
      user = await Student.findOne({ where: { email: email } });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    }

    if (!user.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatch = bcrypt.compare(password, user.password);
    console.log(passwordMatch);
    if (passwordMatch) {
      const role = user instanceof Teacher ? "teacher" : "student";

      const token = generateToken(user.id, user.name, role);


      // console.log("user in cont", student.dataValues.image);
      res.json({
        token,
        userId: user.idstudents ? user.idstudents : user.idteachers,
        role,

        image: user.dataValues.image ? user.dataValues.image : "",

      });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const createUser = async (req, res) => {
  const {
    name,
    email,
    password,
    desc,
    role,
    image,
    Phrases,
    level,
    review,
    accepted,
  } = req.body;

  try {
    if (!password || password.trim() === "") {
      return res.status(400).json({ error: "Password is required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (role === "teacher") {
      const newTeacher = await Teacher.create({
        name: name,
        email,
        password: hashedPassword,
        desc,
        image,
        review,
        accepted,
      });
      const token = generateToken(newTeacher.id, newTeacher.name, "teacher");
      res.status(201).json({ ...newTeacher.toJSON(), token });
    } else if (role === "student") {
      const newStudent = await Student.create({
        name: name,
        email,
        password: hashedPassword,
        image,
        Phrases,
        level,
      });
      const token = generateToken(newStudent.id, newStudent.name, "student");
      res.status(201).json({ ...newStudent.toJSON(), token });
    } else {
      res.status(400).json({ error: "Invalid role specified" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
};

module.exports = {
  loginUser,
  createUser,
};
