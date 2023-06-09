import  Router from "express";
const router = Router();

import getAllProducts from "../Controllers/Products/getAllProducts";

router.get("/getAllProducts",getAllProducts)

export default router;