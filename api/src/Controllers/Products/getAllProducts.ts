const { conn } =require("../../db");
const { Product } = conn.models;
import { Request, Response } from "express";

const getAllProducts = async (req: Request,res: Response) =>{
    try {
        const response = await Product.findAll()
        response.sort((a:any,b:any)=>a.code-b.code)
        return res.json(response)
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
}

export default getAllProducts;