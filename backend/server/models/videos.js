const { DataTypes } = require("sequelize");
const sequelize = require("../db/config.js");
const Course = require("../models/courses.js");

const Videos = sequelize.define(
  "videos",
  {
    idvideos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    videos: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    courses_idcourse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Course,
        key: "idcourse",
      },
    },
    islocked: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    history_idhistory: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    
    
  },
  {
    timestamps: false,
    tableName: "videos",
  }
);

module.exports = Videos;
