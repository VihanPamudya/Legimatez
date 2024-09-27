const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const CaseCosting = sequelize.define(
  "CaseCosting",
  {
    Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    CaseId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    CostFactorId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    HoursSpent: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    InvoicedYN: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    LasteUpdatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    LastUpdatedUser: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    ActiveYN: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    Sequence: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
  },
  {
    tableName: "CaseCosting",
    timestamps: false,
  }
);

module.exports = CaseCosting;
