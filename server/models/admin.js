const { DataTypes } = require("sequelize");
const sequelize = require("../db/config.js");
const Reclamation = require("../models/reclamation.js");
const Admin = sequelize.define(
  "admin",
  {
    idadmin: {
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
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    admincol: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    reclamation_idreclamation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Reclamation,
        key: "idreclamation",
      },
    },
  },
  {
    timestamps: false,
    tableName: "admin",
  }
);

module.exports = Admin;
