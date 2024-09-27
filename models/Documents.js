const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Documents = sequelize.define(
  "Documents",
  {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
  },
  {
    tableName: "Documents",
    timestamps: false,
  }
);

module.exports = Documents;
