import { DataBase } from "../../db";
const { Reviews, Product } = DataBase.conn.models;
import { Request, Response } from "express";
const getAllReviews = async (req: Request,res: Response) => {
  try {
    const allReviews = await Reviews.findAll({include: {model: Product}});
    res.status(200).json(allReviews);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default getAllReviews;
