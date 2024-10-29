import mongoose from "mongoose";

const mongoUri = "mongodb+srv://sayak6237:RKzd0CsZx14HKk1e@cluster0.f09c4.mongodb.net/"
export async function initDb() {
    const db = await mongoose.connect(mongoUri);
    return db;
}