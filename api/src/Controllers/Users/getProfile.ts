import { Request, Response } from "express";
import { UserAttributes } from "../../Interfaces/interfaces";
import { DataBase } from "../../db";
const {User} = DataBase.conn.models;

const getProfile = async (req: Request, res: Response) => {
    try {
        const user = req.user as UserAttributes;
        const {id} = user;
        const profile =  await User.findByPk(id);
        const response = {
            message: "Bienvenido a E-Commerce!",
            credentials: {
              id: user?.id,
              email: user?.email,
            },
            profile,
          };
        return res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

export default getProfile;