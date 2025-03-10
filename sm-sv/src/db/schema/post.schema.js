const { DataTypes } = require("sequelize");
const db = require("../index");
const User = require("./user.schema");

const Post = db.define(
  "posts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    text: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

module.exports = Post;
