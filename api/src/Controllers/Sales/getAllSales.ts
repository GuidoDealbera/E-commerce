const { conn } =require("../../db");
const { Sale } = conn.models;
import { Request, Response } from "express";

const getAllSales= async (req:Request, res: Response) => {
    try {
        const response = await Sale.findAll()
        
       return res.status(200).json(response)
    } catch (error) {
       return res.status(500).send("Error del servidor")
    }
} 

export default getAllSales