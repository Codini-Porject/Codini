const { DataTypes } = require("sequelize");
const sequelize = require("../db/config.js");
const Quizz = require("../models/quizz.js");

const Question = sequelize.define(
  "questions",
  {
    idquestions: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    question: {
      type: DataTypes.STRING(445),
      allowNull: false,
    },
    rightOption :{
    type:DataTypes.STRING,
    allowNull:false
    },
    quizz_idquizz: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Quizz,
        key: "idquizz",
      },
    },
  },
  {
    timestamps: false,
    tableName: "questions",
  }
);

module.exports = Question;
