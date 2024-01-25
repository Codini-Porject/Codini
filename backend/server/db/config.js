const Sequelize = require("sequelize");

const sequelize = new Sequelize("codini", "root", "Louay2004@", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
