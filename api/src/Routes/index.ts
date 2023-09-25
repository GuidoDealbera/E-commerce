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
import postCategory from "../Controllers/Category/postCategory";
import getCategories from "../Controllers/Category/getCategories";
import getAllUsers from "../Controllers/Users/getAllUsers";
import putUser from "../Controllers/Users/putUser";
import putProduct from "../Controllers/Products/putProduct";
import putReview from "../Controllers/Reviews/putReview";
import deleteUser from "../Controllers/Users/deleteUser";
import deleteReview from "../Controllers/Reviews/deleteReview";
import deleteProduct from "../Controllers/Products/deleteProduct";
import getUserByEmail from "../Controllers/Users/getUserByEmail";

//GET
router.get("/reviews", getAllReviews);
router.get("/user/:id", getUserById);
router.get("/getAllUsers", getAllUsers);
router.get("/getAllProducts", getAllProducts);
router.get("/getAllReviews", getAllReviews);
router.get("/product/:id", getProductById);
router.get("/getProductByName", getProductByName);
router.get("/getSales", getAllSales);
router.get("/getCategories", getCategories);

//POST
router.post("/postProduct", postProduct);
router.post("/auth/login", postUser, getUserByEmail);
router.post("/postReview", postReview);
router.post("/postCategory", postCategory);

//PUT
router.put("/putUser/:id", putUser);
router.put("/putProduct/:id", putProduct);
router.put("/putReview/:id", putReview);

//DELETE
router.delete("/deleteUser/:id", deleteUser);
router.delete("/deleteProduct/:id", deleteProduct);
router.delete("/deleteReview/:id", deleteReview);

//Probando MercadoPago
router.post("/mp/:id", payment);
router.post("/mp", initPayment);

export default router;
