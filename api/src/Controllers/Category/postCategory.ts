const {conn} = require("../../db");
const {Category} = conn.models;
import { Request, Response } from "express";

const postCategory = async (req: Request, res: Response) => {
    try {
        const {name} = req.body;
        const check = await Category.findOne({where: {
            name: name,
        }})
        if(!check){
            const newCategory = await Category.create({name})
            return res.json(newCategory);
        }else{
            res.status(401).send("Categoría existente")
        }
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
}

export default postCategory;