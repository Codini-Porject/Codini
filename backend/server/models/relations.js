const Student = require("../models/students.js");
const Teacher = require("../models/teachers.js");
const Language = require("../models/languages.js");
const Course = require("../models/courses.js");
const Review = require("../models/reviews.js");
const Quizz = require("../models/quizz.js");
const Question = require("../models/questions.js");
const Answer = require("../models/answers.js");
const Admin = require("../models/admin.js");
const Videos = require("../models/videos.js");
const Payment = require("../models/payment.js");
const Chat = require("../models/chat.js");
const Enroll = require("../models/enroll.js");
const Reclamation = require("../models/reclamation.js");
const sequelize = require("../db/config.js");

Student.hasMany(Review, { foreignKey: "students_idstudents" });
Review.belongsTo(Student, { foreignKey: "students_idstudents" });

Teacher.hasMany(Review, { foreignKey: "teachers_idteachers" });
Review.belongsTo(Teacher, { foreignKey: "teachers_idteachers" });

Teacher.hasMany(Quizz, { foreignKey: "teachers_idteachers" });
Quizz.belongsTo(Teacher, { foreignKey: "teachers_idteachers" });

Language.hasMany(Course, { foreignKey: "languages_idlanguages" });
Course.belongsTo(Language, { foreignKey: "languages_idlanguages" });

Teacher.hasMany(Videos, { foreignKey: "teachers_idteachers" });
Videos.belongsTo(Teacher, { foreignKey: "teachers_idteachers" });

Course.hasMany(Videos, { foreignKey: "courses_idcourse" });
Videos.belongsTo(Course, { foreignKey: "courses_idcourse" });

Course.hasMany(Quizz, { foreignKey: "courses_idcourse" });
Quizz.belongsTo(Course, { foreignKey: "courses_idcourse" });

Course.hasMany(Payment, { foreignKey: "courses_idcourse" });
Payment.belongsTo(Course, { foreignKey: "courses_idcourse" });

Student.hasMany(Payment, { foreignKey: "students_idstudents" });
Payment.belongsTo(Student, { foreignKey: "students_idstudents" });

Student.hasMany(Chat, { foreignKey: "students_idstudents" });
Chat.belongsTo(Student, { foreignKey: "students_idstudents" });

Teacher.hasMany(Chat, { foreignKey: "teachers_idteachers" });
Chat.belongsTo(Teacher, { foreignKey: "teachers_idteachers" });

Student.hasMany(Enroll, { foreignKey: "students_idstudents" });
Enroll.belongsTo(Student, { foreignKey: "students_idstudents" });

Course.hasMany(Enroll, { foreignKey: "courses_idcourse" });
Enroll.belongsTo(Course, { foreignKey: "courses_idcourse" });

Teacher.hasMany(Reclamation, { foreignKey: "teachers_idteachers" });
Reclamation.belongsTo(Teacher, { foreignKey: "teachers_idteachers" });

Admin.belongsTo(Reclamation, { foreignKey: "reclamation_idreclamation" });
Reclamation.hasOne(Admin, { foreignKey: "reclamation_idreclamation" });

sequelize
  .sync()
  .then(() => {
    console.log("Database tables synchronized successfully.");
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

module.exports = {
  Student,
  Teacher,
  Language,
  Course,
  Review,
  Quizz,
  Question,
  Answer,
  Admin,
  Videos,
  Payment,
  Chat,
  Enroll,
  Reclamation,
};
