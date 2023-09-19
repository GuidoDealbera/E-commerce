const {conn} = require("../../db");
const {Reviews} = conn.models;
import { Request, Response } from "express";

const deleteReview = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const reviewToDelete = await Reviews.findByPk(id);
        if(reviewToDelete) {
            await reviewToDelete.destroy();
            return res.status(200).json({Message: "Review deleted successfully!!"});
        } else {
            return res.status(400).send("Review no encontrada")
        }
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
};

export default deleteReview;