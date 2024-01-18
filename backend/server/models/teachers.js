const { DataTypes } = require("sequelize");
const sequelize = require("../db/config.js");
const bcrypt = require("bcrypt")

const Teacher = sequelize.define(
  "teachers",
  {
    idteachers: {
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
      set(value) {
        this.setDataValue('password', bcrypt.hashSync(value, 10));
      },
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    review: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      allowNull: true,
    },
    accepted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
    tableName: "teachers",
  }
);

Teacher.beforeSave(async (teacher, options) => {
  if (teacher.changed('password')) {
    const hash = await bcrypt.hash(teacher.password, 10);
    teacher.password = hash;
  }
});

module.exports = Teacher;
