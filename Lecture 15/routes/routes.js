import { Router } from "express";
import products from './product_routes.js';

const router = Router();

export default () => {
    products(router);
    return router;
};