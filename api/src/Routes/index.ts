import  Router from "express";
const router = Router();

import getAllProducts from "../Controllers/Products/getAllProducts";
import postUser from "../Controllers/Users/postUser";
import postProduct from "../Controllers/Products/postProduct";





router.get("/getAllProducts",getAllProducts)
router.post("/postProduct", postProduct)
router.post("/postUser", postUser)






export default router;