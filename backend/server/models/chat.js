const { DataTypes } = require("sequelize");
const sequelize = require("../db/config.js");
const Student = require("../models/students.js");
const Teacher = require("../models/teachers.js");

const Chat = sequelize.define(
  "chat",
  {
    content: {
      type: DataTypes.TEXT,
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
    teachers_idteachers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Teacher,
        key: "idteachers",
      },
    },
  },
  {
    timestamps: false,
    tableName: "chat",
  }
);

module.exports = Chat;
