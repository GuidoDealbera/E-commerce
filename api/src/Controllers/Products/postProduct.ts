import { DataBase } from "../../db";
const { Product } = DataBase.conn.models;
import { Request, Response } from "express";

const postProduct = async (req: Request,res: Response) =>{
    try {
        const {name,description,photos,price,heading,stock}= req.body
       
        const check2 = await Product.findOne({where:{
            name: name
        }})
        if(!check2){
            const newProduct = await Product.create(
                {
                name,description,photos
                ,price,stock,heading
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