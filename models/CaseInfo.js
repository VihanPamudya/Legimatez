const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const CaseInfo = sequelize.define(
  "CaseInfo",
  {
    Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    CaseRefNo: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    Title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    CaseTypeId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    ClientId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    ProofOfMeansYN: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    ConflictOfInterestYN: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    AgeDisputeYN: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    AgeDisputeResolved: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    CaseHORefNo: {
      type: DataTypes.STRING(25),
      allowNull: true,
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
      defaultValue: false,
    },
    Sequence: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
  },
  {
    tableName: "CaseInfo",
    timestamps: false,
  }
);

module.exports = CaseInfo;
