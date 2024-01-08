const { DataTypes } = require("sequelize");
const sequelize = require("../db/config.js");
const Course = require("../models/courses.js");

const Quizz = sequelize.define(
  "quizz",
  {
    idquizz: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    islocked: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    courses_idcourse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Course,
        key: "idcourse",
      },
    },
  },
  {
    timestamps: false,
    tableName: "quizz",
  }
);

module.exports = Quizz;
