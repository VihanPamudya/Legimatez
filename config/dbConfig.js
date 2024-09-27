const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

async function checkDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to the database");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
    process.exit(1);
  }
}

module.exports = sequelize;
module.exports.checkDatabaseConnection = checkDatabaseConnection;
