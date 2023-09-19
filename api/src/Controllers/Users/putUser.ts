const { conn } = require("../../db");
const { User, Product } = conn.models;
import { Request, Response } from "express";

const putUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const {
        name,
        lastName,
        username,
        profilePhoto,
        phone,
        address,
        postalCode,
        interests,
        seller,
      } = req.body;
    const user = await User.findByPk(id);
    if (!user) return res.status(400).json({ error: "Usuario no encontrado" });
    else { 
      await User.update(
        {
          name,
          lastName,
          username,
          profilePhoto,
          phone,
          address,
          postalCode,
          interests,
          seller: seller !== null && seller !== undefined ? seller : true,
        },
        { where: { id: id }, returning: true }
      );
      const userUpdated = await User.findOne({
        where: {id: id},
        include: {
            model: Product
        },
      });

      return res.status(200).json(userUpdated);
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default putUser;
