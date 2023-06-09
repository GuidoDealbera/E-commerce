const { conn } = require("../../db");
const {User, Product} = conn.models;

const getUserById = async (req: any, res: any) => {
    try {
        const {id} = req.params;
        const user = await User.findOne({where: {
            id: id,
        }, include: {model: Product}})
        res.status(200).json(user)
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
}

export default getUserById;