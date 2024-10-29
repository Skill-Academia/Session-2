import express from 'express';
import router from './routes/routes.js';

const app = express();

const port = 8000;

app.use(express.json({ limit: '500kb' })); // Middleware function


app.use("/", router());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})