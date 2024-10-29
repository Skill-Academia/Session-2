import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    imageURL: { type: String, require: true },
    discount: { type: Number, require: true },
},
    { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);