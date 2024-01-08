const express = require("express");
const router = express.Router();
const studentControlleur = require("../controllers/studentsController");

router.get("/getAll", studentControlleur.getAllStudents);
router.get("/getOne/:id", studentControlleur.getOneStudent);
router.put("/upd/:id", studentControlleur.updateStudent);
router.post("/add", studentControlleur.addOneStudent);
router.delete("/del/:id", studentControlleur.deleteOneStudent);

module.exports = router;
