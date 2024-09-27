const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const DocumentVersions = sequelize.define(
  "DocumentVersions",
  {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    DocumentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    FileName: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    MimeType: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    ContentId: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "DocumentVersions",
    timestamps: false,
  }
);

module.exports = DocumentVersions;
