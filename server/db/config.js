const Sequelize = require("sequelize");

const sequelize = new Sequelize("codini2", "root", "amineGZ99", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
