const express = require("express");
const router = express.Router();
const videosController = require("../controllers/videosController");


router.get("/courses/getAll", videosController.getAllVideos);
router.get("/courses/getAll/lan/:id", videosController.getAllVideosForLanguages);
router.get("/courses/getAll/:id", videosController.getAllVideosfor);
router.get("/courses/vid/:courseId", videosController.getAllVideosForCourse);
router.get(
  "/courses/:courseId/:videoId",
  videosController.getVideoForCourseById
);
router.post("/courses/:courseId", videosController.addVideoToCourse);
router.delete(
  "/courses/:videoId",
  videosController.deleteVideoForCourse
);

module.exports = router;
