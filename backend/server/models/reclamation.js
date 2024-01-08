const { DataTypes } = require("sequelize");
const sequelize = require("../db/config.js");
const Teacher = require("../models/teachers.js");

const Reclamation = sequelize.define(
  "reclamation",
  {
    idreclamation: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING(445),
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
  },
  {
    timestamps: false,
    tableName: "reclamation",
  }
);

module.exports = Reclamation;
