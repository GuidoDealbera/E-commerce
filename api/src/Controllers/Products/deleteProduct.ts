import { DataBase } from "../../db";
const {Product} = DataBase.conn.models;
import { Request, Response } from "express";

const deleteProduct = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const productToDelete = await Product.findByPk(id);
        if(productToDelete){
            await productToDelete.destroy();
            return res.status(200).json({Message: "Product deleted successfully!!"})
        } else {
            return res.status(400).send("Producto no encontrado")
        };
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
};

export default deleteProduct;