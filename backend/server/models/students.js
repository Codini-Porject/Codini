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
    password: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    },
    Phrases: {
      type: DataTypes.ENUM("Bootstrap", "Junior", "Senior"),
      allowNull: true,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "students",
  }
);

module.exports = Student;
