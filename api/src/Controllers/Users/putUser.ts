import { DataBase } from "../../db";
const { User, Product } = DataBase.conn.models;
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
        isAdmin,
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
          isAdmin: isAdmin !== null && isAdmin !== undefined ? isAdmin : true,
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
