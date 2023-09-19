const { conn } =require("../../db");
import { Request, Response } from "express";
const { Product, Reviews } = conn.models;
import { Op } from "sequelize";

const getProductByName = async (req: Request,res: Response)=>{
try {
    const {name}= req.query
    const response = await Product.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include:{
          model: Reviews
        }
      });
      response.sort((a:any,b:any)=>a.code-b.code)
      return res.status(200).json(response)
} catch (error: any) {
    res.status(500).json({error: error.message})
}
}

export default getProductByName