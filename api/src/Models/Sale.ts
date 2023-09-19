import { DataTypes, Model, Sequelize } from "sequelize";

interface SaleAttributes {
id: string;
totalPrice: number | 0;
}

export default (sequelize: Sequelize) => {
    class Sale extends Model<SaleAttributes> implements SaleAttributes{
        public id!: string;
        public totalPrice!: number;
    }
    Sale.init(
        {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
          },
        totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false
        } 
    },
        {
            sequelize,
            timestamps: false,
            modelName: "Sale",
          }
        );
      
        return Sale;
}