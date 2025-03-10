const sequelize = require("../db");
const fs = require("fs");
const Post = require("../db/schema/post.schema");
const User = require("../db/schema/user.schema");
const path = require("path");

module.exports = {
  get: async (req, res) => {
    try {
      const posts = await Post.findAll();
      return res.json(posts);
    } catch (error) {
      return res.status(500).json({
        message: "Error: Failed to get posts!",
        originalError: error?.message,
      });
    }
  },

  create: async (req, res) => {
    const image = req.file;
    const { text } = req.body;
    const email = req.headers["x-email"];

    if (!image || !email) {
      return res
        .status(400)
        .json({ message: "Error: Post image cannot be empty!" });
    }

    const t = await sequelize.transaction();

    try {
      const user = await User.findOne({
        where: { email: email },
        attributes: ["id"],
      });

      if (!user) {
        return res.status(400).json({ message: "Error: User not found!" });
      }

      const data = {
        text,
        user_id: user.id,
        image: image.originalname,
      };

      const result = await Post.create(data, { transaction: t });
      const id = result.id;

      fs.mkdir(
        path.join(__dirname, `../../files/${id}`),
        { recursive: true },
        (err) => {
          if (err) {
            return console.error(err);
          } else {
            fs.writeFile(
              path.join(__dirname, `../../files/${id}/${image.originalname}`),
              image.buffer,
              (err) => {
                if (err) {
                  console.error(err);
                } else {
                }
              }
            );
          }
        }
      );

      await t.commit();

      return res.json({ message: "Post created!" });
    } catch (error) {
      await t.rollback();
      return res.status(500).json({
        message: "Error: Failed to create post!",
        originalError: error?.message,
      });
    }
  },
};
