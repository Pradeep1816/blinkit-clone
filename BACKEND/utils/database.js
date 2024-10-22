const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("blinkit", "root", process.env.PASSWORD, {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
