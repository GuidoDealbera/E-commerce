import Router from "express";
const router = Router();
import dotenv from 'dotenv'
dotenv.config()
import getAllProducts from "../Controllers/Products/getAllProducts";
import postUser from "../Controllers/Users/postUser";
import postProduct from "../Controllers/Products/postProduct";
import getUserById from "../Controllers/Users/getUserById";
import getProductByName from "../Controllers/Products/getProductByName";
import postReview from "../Controllers/Reviews/postReviews";
import getAllReviews from "../Controllers/Reviews/getAllReviews";
import getProductById from "../Controllers/Products/getProductsById";
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
import localStrategy from "../Middlewares/local.strategy";
import authLogin from "../Controllers/Auth/authLogin";
import passport from "../Middlewares/passportMiddleware";
import authGoogleCallback from "../Controllers/Auth/authGoogle";
import { verifyToken } from "../Utils/jwt";
import { UserAttributes } from "../Interfaces/interfaces";
import { DataBase } from "../db";
import authorizatedToken from "../Middlewares/authorizatedToken";
import getProfile from "../Controllers/Users/getProfile";
import isAdmin from "../Middlewares/isAdminMiddleware";
import payment, { receiveWebhook } from "../Controllers/MercadoPago/payment.controller";
const {User} = DataBase.conn.models;
const {FRONTEND_URL} = process.env;

                                            //AUTHENTICATE
//AUTH LOCAL
router.post("/auth/login", localStrategy, authLogin);
//AUTH GOOGLE
router.get("/auth/google", passport.authenticate('google', { scope: ['email', 'profile'] }))
router.get("/auth/google/callback", passport.authenticate('google', { failureRedirect: `${FRONTEND_URL}/auth/login` }), authGoogleCallback)

//USERS
router.get("/getAllUsers", getAllUsers); //Ruta a proteger isAdmin
router.get("/user/:id", getUserById);
router.get("/profile", authorizatedToken, getProfile);
router.post("/create/user", postUser);
router.put("/putUser/:id", putUser); //Ruta a proteger con authorizedToken
router.delete("/deleteUser/:id", deleteUser); //Ruta a proteger con isAdmin

//PRODUCTS
router.get("/getAllProducts", getAllProducts);
router.get("/product/:id", getProductById);
router.get("/getProductByName", getProductByName);
router.post("/postProduct", postProduct); //Ruta a proteger con authorizedToken
router.put("/putProduct/:id", putProduct); //Ruta a proteger con authorizedToken
router.delete("/deleteProduct/:id", deleteProduct); //Ruta a proteger con authorizedToken

//REVIEWS
router.get("/getAllReviews", getAllReviews);
router.post("/postReview", postReview); //Ruta a proteger con authorizedToken
router.put("/putReview/:id", putReview); //Ruta a proteger con authorizedToken
router.delete("/deleteReview/:id", deleteReview); //Ruta a proteger con authorizedToken

//SALES
router.get("/getSales", getAllSales);

//CATEGORIES
router.get("/getCategories", getCategories);
router.post("/postCategory", postCategory); //Ruta a proteger con isAdmin

//Probando MercadoPago
router.post("/create-order", payment)
router.get("/success", (req, res) => res.send("success"))
router.get("/failure", (req, res) => res.send("failure"))
router.get("/pending", (req, res) => res.send("pending"))
router.post("/webhook", receiveWebhook)


export default router;
