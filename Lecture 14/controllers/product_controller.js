
export const getProducts = (req, res) => {
    console.log("I've hit this route");
    res.json({
        productID: 1,
        productName: "Iphone 15",
        productDesc: "A16 bionic chip, 6.1 inch display, 128gb storage, 8gb ram",
        productPrice: 1000
    })
}

export const addProduct = (req, res) => {

    const { productID, productName, productDesc, productPrice } = req.body;
    console.log("ProductID: ", productID, "\nProduct Name: ", productName,
        "\nProduct Description: ", productDesc, "\nProduct Price: ", productPrice);
    res.json({
        success: true,
        message: "Product added successfully",
    })

}

