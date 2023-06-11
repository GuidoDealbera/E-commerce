const { conn } = require("../../db");
const { Reviews, Product } = conn.models;

const getAllReviews = async (req: any, res: any) => {
  try {
    const allReviews = await Reviews.findAll({include: {model: Product}});
    res.status(200).json(allReviews);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default getAllReviews;
