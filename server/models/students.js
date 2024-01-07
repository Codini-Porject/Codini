const { DataTypes } = require("sequelize");
const sequelize = require("../db/config.js");

const Student = sequelize.define(
  "students",
  {
    idstudents: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phase: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "students",
  }
);

module.exports = Student;
