const User = require("../db/schema/user.schema");

module.exports = {
  getOne: async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({
      where: { email: "gagan@skillacademia.com" },
      attributes: ["name", "email", "image", "bio", "followers", "following"],
    });

    return res.json(user);
  },
};
