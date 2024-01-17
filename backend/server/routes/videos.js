const express = require("express");
const router = express.Router();
const videosController = require("../controllers/videosController");


router.get("/courses/getAll", videosController.getAllVideos);
router.get("/courses/getAll/:id", videosController.getAllVideosfor);
router.get("/courses/:courseId", videosController.getAllVideosForCourse);
router.get("/courses/:courseId/:videoId",videosController.getVideoForCourseById);
router.post("/courses/:courseId", videosController.addVideoToCourse);
router.delete("/courses/:courseId/:videoId",videosController.deleteVideoForCourse);

module.exports = router;
