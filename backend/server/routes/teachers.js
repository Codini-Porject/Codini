const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teachersController");

router.get("/getAll", teacherController.getAllTeachers);
router.get("/getOne/:id", teacherController.getOneTeacher);
router.put("/upd/:id", teacherController.updateTeacher);
router.post("/add", teacherController.addOneTeacher);
router.delete("/del/:id", teacherController.deleteOneTeacher);

module.exports = router;
