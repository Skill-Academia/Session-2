import { addProduct, getProducts } from "../controllers/product_controller.js";

export default (router) => {

    router.route('/getProducts').get(getProducts);

    router.route('/addProduct').post(addProduct);
};