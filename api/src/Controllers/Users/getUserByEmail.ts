import { DataBase } from "../../db";
const {User, Product} = DataBase.conn.models;
import { Request, Response } from "express";
const getUserByEmail = async (req: Request,res: Response) => {
    try {
        const {email} = req.body;
        const user = await User.findOne({where: {
            email: email,
        }, include: {
            model: Product,
        },
    });
    console.log(user);
    
        res.status(200).json(user)
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
}

export default getUserByEmail;