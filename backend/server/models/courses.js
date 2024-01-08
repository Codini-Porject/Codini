const { DataTypes } = require("sequelize");
const sequelize = require("../db/config.js");
const Teacher = require("../models/teachers.js");
const Language = require("../models/languages.js");

const Course = sequelize.define(
  "courses",
  {
    idcourse: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    teachers_idteachers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Teacher,
        key: "idteachers",
      },
    },
    desc: {
      type: DataTypes.STRING(445),
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    rate: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    languages_idlanguages: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Language,
        key: "idlanguages",
      },
    },
  },
  {
    timestamps: false,
    tableName: "courses",
  }
);

module.exports = Course;
