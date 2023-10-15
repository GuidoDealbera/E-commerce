import { DataBase } from "../../db";
import { Request, Response } from "express";
const { Product, Reviews, Category } = DataBase.conn.models;

const putProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, photos, price, stock, heading } = req.body;
    const product = await Product.findByPk(id);
    if (!product)
      return res.status(400).json({ error: "Producto no encontrado" });
    else {
      await Product.update(
        {
          name,
          description,
          photos,
          price,
          stock,
          heading,
        },
        {
          where: { id: id },
          returning: true,
        }
      );
      const productUpdated = await Product.findOne({
        where: { id: id },
        include: [
          {
            model: Reviews,
          },
          {
            model: Category,
          },
        ],
      });
      return res.status(200).json(productUpdated);
    }
  } catch (error: any) {
    res.status(500).json({error: error.message})
  }
};

export default putProduct;
