const Student = require("../models/students.js");
const Teacher = require("../models/teachers.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (userId, userName, role) => {
  const expiresIn = 60 * 60 * 24 * 7;
  return jwt.sign({ userId, userName, role }, "secretKey", {
    expiresIn: expiresIn,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await Teacher.findOne({ where: { email: email } });

    if (!user) {
      user = await Student.findOne({ where: { email: email } });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    }

    if (!user.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const role = user instanceof Teacher ? "teacher" : "student";
      const token = generateToken(user.id, user.name, role);
      res.json({ token, userId: user.id, role });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const createUser = async (req, res) => {
  const { name, email, password, role, image, phase, level, review, accepted } =
    req.body;

  try {
    if (!password || password.trim() === "") {
      return res.status(400).json({ error: "Password is required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (role === "teacher") {
      const newTeacher = await Teacher.create({
        teacherscol: "value",
        name: name,
        email,
        password: hashedPassword,
        image,
        review,
        accepted,
      });
      res.status(201).json(newTeacher);
    } else if (role === "student") {
      const newStudent = await Student.create({
        name: name,
        email,
        password: hashedPassword,
        image,
        phase,
        level,
      });
      res.status(201).json(newStudent);
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
