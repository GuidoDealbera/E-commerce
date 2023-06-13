const { conn } = require("../../db");
const { Product, Reviews } = conn.models;
import { Request, Response } from "express";

const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productData = await Product.findOne({
      where: { id: id },
      include: { model: Reviews },
    });
    if(productData){
        return res.status(200).json(productData);
    }else{
        return res.status(400).send("Producto no encontrado")
    }
  } catch (error: any) {
    res.status(500).json({error: error.message})
  }
};

export default getProductById;