import express from 'express';
import router from './routes/routes.js';
import { initDb } from './utils/initDb.js';

const app = express();

const port = 8000;

app.use(express.json({ limit: '500kb' })); // Middleware function


app.use("/", router());

app.listen(port, async () => {
    try {
        await initDb();
        console.log("Connected to db");
    }
    catch {
        console.log("Error while connecting to db");
    }
    console.log(`Server running on http://localhost:${port}`);
})