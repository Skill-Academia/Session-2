const router = require("express").Router();
const postController = require("../controllers/post.controller");

router.get("/", postController.get);
router.post("/", postController.create);

module.exports = router;
