const {conn} = require("../../db");
const {Category} = conn.models;
import {Response, Request} from 'express';

const getCategories = async (req: Request, res: Response) => {
    try {
        const allCategories = await Category.findAll();
        return res.json(allCategories);
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
};

export default getCategories;