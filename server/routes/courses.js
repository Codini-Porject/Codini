const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/coursesController");

// Define routes
router.get("/", coursesController.getAllCourses);
router.get("/oneCourse/:id", coursesController.getCourseById);
router.post("/addCourse", coursesController.addCourse);
router.put("/updateCourse/:id", coursesController.updateCourse);
router.delete("/deleteCourse/:id", coursesController.deleteCourse);

module.exports = router;
