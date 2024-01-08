const Reclamation = require("../models/reclamation");

const getAllRec = async (req, res) => {
  try {
    const reclamation = await Reclamation.findAll({});
    res.json(reclamation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const deleteRec = async (req, res) => {
  const { id } = req.params;
  try {
    const reclamation = await Reclamation.findOne({
      where: { idreclamation: id },
    });
    await Reclamation.destroy();
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const addRec = async (req, res) => {
  try {
    const { body,teachers_idteachers } = req.body;
    const newRec = await Reclamation.create({
     body,
teachers_idteachers
    });
    res.status(201).json(newRec);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};



module.exports = {
    getAllRec,
    deleteRec,
    addRec
};
