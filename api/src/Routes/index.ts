import  Router from "express";
const router = Router();

import getAllProducts from "../Controllers/Products/getAllProducts";

import postProduct from "../Controllers/Products/postProduct";
router.get("/getAllProducts",getAllProducts)

router.post("/postProduct", postProduct)
export default router;