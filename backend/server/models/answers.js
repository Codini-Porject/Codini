const { DataTypes } = require("sequelize");
const sequelize = require("../db/config.js");
const Question = require("../models/questions.js");

const Answer = sequelize.define(
  "answers",
  {
    idanswers: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    answers: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    option: {
      type: DataTypes.STRING(455),
      allowNull: false,
    },
    questions_idquestions: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Question,
        key: "idquestions",
      },
    },
  },
  {
    timestamps: false,
    tableName: "answers",
  }
);

module.exports = Answer;
