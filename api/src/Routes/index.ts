import  Router from "express";
const router = Router();

import getAllProducts from "../Controllers/Products/getAllProducts";
import postUser from "../Controllers/Users/postUser";

router.get("/getAllProducts",getAllProducts)
router.post("/postUser", postUser)
export default router;