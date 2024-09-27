const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Currency = sequelize.define(
  "Currency",
  {
    Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    CurrencyCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ActiveYN: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    LastUpdated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Currency",
    timestamps: false,
  }
);

module.exports = Currency;
