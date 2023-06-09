const { conn } =require("../../db");
const { Product } = conn.models;


const postProduct = async (req:any,res:any) =>{
    try {
        const { code,name,description,photos,price,category,heading}= req.body
        const check1 = await Product.findOne({where:{
            code: code
        }})
        const check2 = await Product.findOne({where:{
            name: name
        }})
        if(!check1 && !check2){
            const response = await Product.create({name,description,code,photos,category,price,heading})
            return res.json(response)
        }
        if(check1){
            return res.status()
        }
        
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
}

export default postProduct;