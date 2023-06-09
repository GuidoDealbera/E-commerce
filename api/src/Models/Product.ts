import { DataTypes } from "sequelize";

export default (sequelize: any) => {
    sequelize.define(
        "Product",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            name: {
                type: DataTypes.STRING,
                allowNull:false,
                unique: true
            },
            description: {
                type: DataTypes.STRING,
            },
            code:{
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true
            },
            photos: {
                type: DataTypes.ARRAY(DataTypes.STRING),
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
            },
            stock:{
                type: DataTypes.INTEGER,
            },
            //Rubro ? ver si es de utilidad
            heading: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false
        }
    )
}