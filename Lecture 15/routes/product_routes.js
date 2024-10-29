import { addProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/product_controller.js";

export default (router) => {

    router.route('/getProducts').get(getProducts);

    router.route('/getProduct/:id').get(getProduct);

    router.route('/addProduct').post(addProduct);

    router.route('/updateProduct/:id').put(updateProduct);

    router.route('/deleteProduct/:id').delete(deleteProduct);
};