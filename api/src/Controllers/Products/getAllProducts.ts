const { conn } =require("../../db");
const { Product } = conn.models;

const getAllProducts = async (req:any,res:any) =>{
    try {
        const response = await Product.findAll()

        return res.json(response)
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
}

export default getAllProducts;