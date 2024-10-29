import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send("This is our first backend web development class!");
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});