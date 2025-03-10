require("dotenv").config();
const express = require("express");
const db = require("./db");
const cors = require("cors");
const path = require("path");

const userRoute = require("./routes/user.route");
const postRoute = require("./routes/post.route");
const Post = require("./db/schema/post.schema");

const PORT = process.env.PORT || 8090;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use("/files", express.static(path.join(__dirname, "../files")));

app.get("/health", (_, res) => {
  return res.json({ status: "OK" });
});

db.authenticate()
  .then(async () => {
    console.log("Connected to database");
    await Post.sync({ alter: true });
  })
  .catch((err) => console.log("Database connection failed"));

app.use("/users", userRoute);
app.use("/posts", postRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
