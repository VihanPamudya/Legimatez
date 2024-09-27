const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Artifact = sequelize.define(
  "Artifact",
  {
    Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    ArtifactName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ArtifactPath: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    CaseId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    LastUpdatedDate: {
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
    tableName: "Artifact",
    timestamps: false,
  }
);

module.exports = Artifact;
