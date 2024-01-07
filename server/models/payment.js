const { DataTypes } = require("sequelize");
const sequelize = require("../db/config.js");
const Student = require("../models/students.js");
const Course = require("../models/courses.js");

const Payment = sequelize.define(
  "payment",
  {
    idpayment: {
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
  },
  {
    timestamps: false,
    tableName: "payment",
  }
);

module.exports = Payment;
