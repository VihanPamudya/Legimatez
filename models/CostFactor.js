const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const CostFactor = sequelize.define(
  "CostFactor",
  {
    Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    CostFactorName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    LasteUpdatedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    LastUpdatedUser: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    ActiveYN: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    Sequence: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
  },
  {
    tableName: "CostFactor",
    timestamps: false,
  }
);

module.exports = CostFactor;
