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
import localStrategy from "../Middlewares/local.strategy";
import authLogin from "../Controllers/Auth/authLogin";
import passport from "../Middlewares/passportMiddleware";
import authGoogleCallback from "../Controllers/Auth/authGoogle";
const {FRONTEND_URL} = process.env;

                                            //AUTHENTICATE
//AUTH LOCAL
router.post("/auth/login", localStrategy, authLogin);
//AUTH GOOGLE
router.get("/auth/google", passport.authenticate('google', { scope: ['email', 'profile'] }))
router.get("/auth/google/callback", passport.authenticate('google', { failureRedirect: `${FRONTEND_URL}/auth/login` }), authGoogleCallback)

//USERS
router.get("/getAllUsers", getAllUsers);
router.get("/user/:id", getUserById);
router.post("/create/user", postUser);
router.put("/putUser/:id", putUser);
router.delete("/deleteUser/:id", deleteUser);

//PRODUCTS
router.get("/getAllProducts", getAllProducts);
router.get("/product/:id", getProductById);
router.get("/getProductByName", getProductByName);
router.post("/postProduct", postProduct);
router.put("/putProduct/:id", putProduct);
router.delete("/deleteProduct/:id", deleteProduct);

//REVIEWS
router.get("/getAllReviews", getAllReviews);
router.post("/postReview", postReview);
router.put("/putReview/:id", putReview);
router.delete("/deleteReview/:id", deleteReview);

//SALES
router.get("/getSales", getAllSales);

//CATEGORIES
router.get("/getCategories", getCategories);
router.post("/postCategory", postCategory);

//Probando MercadoPago
router.post("/mp/:id", payment);
router.post("/mp", initPayment);


export default router;
