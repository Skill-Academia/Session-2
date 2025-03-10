const { DataTypes } = require("sequelize");
const db = require("../index");

const User = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    email: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    image: { type: DataTypes.TEXT, allowNull: false },
    bio: {
      type: DataTypes.TEXT,
    },
    followers: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    following: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
  },
  {
    // Other model options go here
  }
);

module.exports = User;
