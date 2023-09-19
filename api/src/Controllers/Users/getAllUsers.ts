const {conn} = require("../../db");
const {User} = conn.models;
import { Request, Response } from "express";

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await User.findAll();
        res.json(allUsers)
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
}

export default getAllUsers;