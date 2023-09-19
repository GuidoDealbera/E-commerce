const { conn } = require("../../db");
const { Product } = conn.models;
import { Request, Response } from "express";

const postProduct = async (req: Request,res: Response) =>{
    try {
        const {name,description,photos,price,category,heading,stock}= req.body
       
        const check2 = await Product.findOne({where:{
            name: name
        }})
        if(!check2){
            const newProduct = await Product.create(
                {
                name,description,photos
                ,category,price,stock,heading //hay que quitar "CATEGORY" ya que será una tabla aparte en la DB
            }
                )
            return res.json(newProduct)
        }
        if(check2){
            return res.status(401).send("Ya existe un producto con ese nombre")
        }
        
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
}

export default postProduct;