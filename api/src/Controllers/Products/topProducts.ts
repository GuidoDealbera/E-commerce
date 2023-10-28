import { Request, Response } from "express";
import { DataBase } from "../../db";
import { ProductAttributes } from "../../Interfaces/interfaces";
const {Product} = DataBase.conn.models;

const topProducts = async (_req: Request, res: Response) => {
    try {
        const allProducts = await Product.findAll();
        const typeAllProducts: ProductAttributes[] = allProducts.map((product: any) => product.toJSON());
        const sortedAndFilterProducts = typeAllProducts.sort((a, b) => b.salesCount - a.salesCount).slice(0, 12);
        res.status(200).json(sortedAndFilterProducts)
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
};

export default topProducts;