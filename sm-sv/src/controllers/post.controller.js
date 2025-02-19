const Post = require("../db/schema/post.schema");
const User = require("../db/schema/user.schema");

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
    const { text } = req.body;
    const email = req.headers["x-email"];

    if (!text || !email) {
      return res
        .status(400)
        .json({ message: "Error: Post text cannot be empty!" });
    }

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
      };

      await Post.create(data);

      return res.json({ message: "Post created!" });
    } catch (error) {
      return res.status(500).json({
        message: "Error: Failed to create post!",
        originalError: error?.message,
      });
    }
  },
};
