import Router from "express";
const router = Router();

import getAllProducts from "../Controllers/Products/getAllProducts";
import postUser from "../Controllers/Users/postUser";
import postProduct from "../Controllers/Products/postProduct";
import getUserById from "../Controllers/Users/getUserById";
import getProductByName from "../Controllers/Products/getProductByName";
import postReview from "../Controllers/Reviews/postReviews";
import getAllReviews from "../Controllers/Reviews/getAllReviews";
import getProductById from "../Controllers/Products/getProductsById";
import payment from "../Controllers/MercadoPago/payment";
import initPayment from "../Controllers/MercadoPago/initPayment";
import getAllSales from "../Controllers/Sales/getAllSales";

router.get("/reviews", getAllReviews);
router.get("/user/:id", getUserById);
router.get("/getAllProducts", getAllProducts);
router.get("/product/:id", getProductById);
router.get("/getProductByName", getProductByName);
router.get("/getSales",getAllSales)
router.post("/postProduct", postProduct);
router.post("/postUser", postUser);
router.post("/postReview", postReview);

//Probando MercadoPago
router.post("/mp/:id", payment);
router.post("/mp", initPayment);

export default router;
