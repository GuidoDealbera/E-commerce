const { conn } = require("../../db");
const { User } = conn.models;
import { Request, Response } from "express";

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userToDelete = await User.findByPk(id);
    if (userToDelete) {
      await userToDelete.destroy();
      return res.status(200).json({ Message: "User deleted successfully!!" });
    } else {
      return res.status(400).send("Usuario no encontrado");
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default deleteUser;
