const { DataTypes } = require("sequelize");
const sequelize = require("../db/config.js");
const Student = require("../models/students.js");
const Course = require("../models/courses.js");

const Enroll = sequelize.define(
  "enroll",
  {
    students_idstudents: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Student,
        key: "idstudents",
      },
    },
    courses_idcourse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Course,
        key: "idcourse",
      },
    },
    percentage: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "enroll",
  }
);

module.exports = Enroll;
