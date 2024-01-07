const { DataTypes } = require("sequelize");
const sequelize = require("../db/config.js");
const Student = require("../models/students.js");
const Course = require("../models/courses.js");

const Review = sequelize.define(
  "reviews",
  {
    idreviews: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
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
    body: {
      type: DataTypes.STRING(455),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "reviews",
  }
);

module.exports = Review;
