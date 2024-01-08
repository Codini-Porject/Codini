const { DataTypes } = require("sequelize");
const sequelize = require("../db/config.js");

const Language = sequelize.define(
  "languages",
  {
    idlanguages: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "languages",
  }
);

module.exports = Language;
