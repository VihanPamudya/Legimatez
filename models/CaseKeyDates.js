const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const CaseKeyDates = sequelize.define(
  "CaseKeyDates",
  {
    Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    DateDesc: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    LasteUpdatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    LastUpdatedUser: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    ActiveYN: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "CaseKeyDates",
    timestamps: false,
  }
);

module.exports = CaseKeyDates;
