import { DataBase } from "../../db";
const { Reviews } = DataBase.conn.models;
import { Request, Response } from "express";
const postReview = async (req: Request,res: Response) => {
  try {
    const { score, comment, amountScores, averageScore, username } = req.body;
    if (!score || !comment || !amountScores || !averageScore || !username) {
      return res.status(400).send("Faltan datos");
    }
    if (score && comment && amountScores && averageScore && username) {
      const newReview = await Reviews.create({
        score,
        comment,
        amountScores,
        averageScore,
        username,
      });
      return res.status(201).json(newReview);
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default postReview;
