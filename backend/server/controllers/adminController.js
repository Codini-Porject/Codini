const Admin = require("../models/admin");


const getadmin = async (req, res) => {
  try {
    const admin = await Admin.findAll({});
    res.json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const deleteadmin = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await Admin.findOne({
      where: { idadmin: id },
    });
    await teacher.destroy();
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const addadmin = async (req, res) => {
  try {
    const { name, email, password,image } = req.body;
    const newAdmin = await Admin.create({
      name,
      email,
      password,
      image
    });
    res.status(201).json(newAdmin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};


module.exports = {
  getadmin,
  deleteadmin,
  addadmin,

};
