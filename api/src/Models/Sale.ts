import { DataTypes, Model, Sequelize } from "sequelize";
import { SaleAttributes } from "../Interfaces/interfaces";

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