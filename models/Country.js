const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Country = sequelize.define(
  "Country",
  {
    Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    CountryCode: {
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
    tableName: "Country",
    timestamps: false,
  }
);

module.exports = Country;
