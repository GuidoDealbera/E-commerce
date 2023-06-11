import  Router from "express";
const router = Router();

import getAllProducts from "../Controllers/Products/getAllProducts";
import postUser from "../Controllers/Users/postUser";
import postProduct from "../Controllers/Products/postProduct";
import getUserById from "../Controllers/Users/getUserById";

import postReview from "../Controllers/Reviews/postReviews";
import getAllReviews from "../Controllers/Reviews/getAllReviews";


router.get("/reviews", getAllReviews);
router.get("/user/:id", getUserById)
router.get("/getAllProducts",getAllProducts)
router.post("/postProduct", postProduct)
router.post("/postUser", postUser)

router.post("/postReview", postReview);


export default router;