const { conn } =require("../../db");
const { Product } = conn.models;


const postProduct = async (req:any,res:any) =>{
    try {
        const { code,name,description,photos,price,category,heading,stock}= req.body
        const check1 = await Product.findOne({where:{
            code: code
        }})
        const check2 = await Product.findOne({where:{
            name: name
        }})
        if(!check1 && !check2){
            const newProduct = await Product.create(
                {
                name,description,code,photos
                ,category,price,stock,heading
            }
                )
            return res.json(newProduct)
        }
        if(check1){
            return res.status(400).send("El codigo ya existe")
        }
        if(check2){
            return res.status(401).send("Ya existe un producto con ese nombre")
        }
        
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
}

export default postProduct;