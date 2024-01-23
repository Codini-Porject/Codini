const Videos = require("../models/videos.js");
const Course = require("../models/courses.js");
const Language = require("../models/languages.js");
// const { where } = require("sequelize");

const getAllVideosForCourse = async (req, res) => {
  // const courseId = req.params.courseId;
  try {
    const videos = await Videos.findAll({
      where: { languages_idlanguages: req.params.idl },
    });
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// const getAllVideosForLanguages = async (req, res) => {
//   try {
//     const videos = await Videos.findAll({
//       where: { languages_idlanguages: req.params.idl },
//       include: {
//         model: Language,
//       },
//     });
//     res.json(videos);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server Error" });
//   }
// };
// db.Save.findAll({
//   where: {
//     users_idu: req.params.id,
//   },
//   include: {
//     model: db.Product,
//     as: 'product',
//     attributes: ['idp', 'name', 'image', 'lastprice', 'newprice', 'rate', 'discription', 'color', 'size', 'sellername'],
//   },
// }).then((result)=>{
//   res.json(result)
// }).catch((err)=>{
//   res.send(err);
// })
// }

const getAllVideos = async (req, res) => {
  
  try {
    const videos = await Videos.findAll({});
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getAllVideosfor = async (req, res) => {
  
  try {
    const videos = await Videos.findAll({
      where : {teachers_idteachers : req.params.id}
    });
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getAllVideosForLanguages = async (req, res) => {
  try {
    const courses = await Course.findAll({where:{languages_idlanguages:req.params.id},include: [
      { model: Videos}
    ],});
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getVideoForCourseById = async (req, res) => {
  const { courseId, videoId } = req.params;
  try {
    const video = await Videos.findOne({
      where: { idvideos: videoId, courses_idcourse: courseId },
    });
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.json(video);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const deleteVideoForCourse = async (req, res) => {
  const { videoId } = req.params;
  try {
   const result= await Videos.destroy({
      where: { idvideos: videoId },
    });
    res.json({ result: "Video deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const addVideoToCourse = async (req, res) => {
  const { courseId } = req.params;
  const { videos, islocked,teachers_idteachers  } = req.body;

  // const { role } = req.user;

  try {
    // if (role !== "teacher") {
    //   return res.status(403).json({ error: "Unauthorized" });
    // }

    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const newVideo = await Videos.create({
      videos,
      courses_idcourse: courseId,
      islocked,
      teachers_idteachers:teachers_idteachers
    });
    res.status(201).json(newVideo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getAllVideosForCourse,
  getVideoForCourseById,
  deleteVideoForCourse,
  addVideoToCourse,
  getAllVideos,
  getAllVideosfor,
  getAllVideosForLanguages
};
