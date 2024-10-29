import express from 'express';

const app = express();

const port = 8000;

app.use(express.json({ limit: '500kb' }));


app.get("/", (req, res) => {
    res.send("This is our second backend web development class!");
})

app.get("/checking", (req, res) => {
    console.log("I am testing")
    res.json({ name: "Sayak", class: "FSWD" })
})

app.post("/addProduct", (req, res) => {
    const { productName, productDesc, productPrice } = req.body;
    console.log(productName)
    console.log(productDesc)
    console.log(productPrice)
    res.json({ msg: "Printed Successfully" })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})