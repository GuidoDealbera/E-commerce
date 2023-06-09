const { conn } = require("../../db");
const { Reviews } = conn.models;

const postReview = async (req: any, res: any) => {
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
