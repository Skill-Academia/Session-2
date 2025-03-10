const router = require("express").Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

router.get("/", postController.get);
router.post("/", upload.single("image"), postController.create);

module.exports = router;
