const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to MongoDB."))
  .catch((err) => console.log("MongoDB connection error: ", err.message));
