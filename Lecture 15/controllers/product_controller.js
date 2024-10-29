import { Product } from "../models/product_model.js";

// GET All products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        if (products.length > 0) {
            return res.json({
                success: true,
                message: "Products fetched successfully",
                data: products
            })
        }
        return res.json({
            success: true,
            message: "No products found",
            data: []
        })

    }
    catch {
        return res.json({
            success: false,
            message: "Error while fetching products"
        })
    }

}

// GET a single product

export const getProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        return res.json({
            success: true,
            message: "Product detail fetched",
            data: product
        })

    }
    catch {
        return res.json({
            success: false,
            message: "Error while fetching product"
        })
    }

}

// ADD a product
export const addProduct = async (req, res) => {

    const { name, description, price, imageURL, discount } = req.body;
    try {
        const newProduct = await Product.create({
            name,
            description,
            price,
            imageURL,
            discount
        })
        return res.json({
            success: true,
            message: "Product added successfully",
            data: newProduct
        })
    }
    catch {
        return res.json({
            success: false,
            message: "Error while adding product to database"
        })
    }
}


// UPDATE a product
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, imageURL, discount } = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            name,
            description,
            price,
            imageURL,
            discount
        })
        return res.json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct
        })
    }
    catch {
        return res.json({
            success: false,
            message: "Error while updating product in database"
        })
    }
}

// DELETE a product

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findByIdAndDelete(id);
        return res.json({
            success: true,
            message: "Product deleted successfully",
            data: product
        })

    }
    catch {
        return res.json({
            success: false,
            message: "Error while deleting product"
        })
    }

}
