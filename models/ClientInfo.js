const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const ClientInfo = sequelize.define(
  "ClientInfo",
  {
    Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    DOB: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    PIN: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Language: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    CountryId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    State: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    PostalCode: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Address1: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    Address2: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    PrimaryContactNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SecodaryContactNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    InstantMessagingNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    FosterCarerName: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    FosterCarerContactNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    SocialWorkerName: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    SocialWorkerContactNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    AsylumUnit: {
      type: DataTypes.STRING(50),
      allowNull: true,
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
    },
    Sequence: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
  },
  {
    tableName: "ClientInfo",
    timestamps: false,
  }
);

module.exports = ClientInfo;
