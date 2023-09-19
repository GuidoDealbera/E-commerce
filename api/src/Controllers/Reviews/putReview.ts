const { conn } = require("../../db");
const { Reviews, Product } = conn.models;
import { Request, Response } from "express";

const putReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { score, comment, amountScores, averageScore, username } = req.body;
    const review = await Reviews.findByPk(id);
    if (!review) return res.status(400).json({ error: "Review no encontrada" });
    else {
      await Reviews.update(
        {
          score,
          comment,
          amountScores,
          averageScore,
          username,
        },
        {
          where: { id: id },
          returning: true,
        }
      );
      const updatedReview = await Reviews.findOne({
        where: { id: id },
        include: {
          model: Product,
        },
      });
      return res.status(200).json(updatedReview);
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default putReview;
