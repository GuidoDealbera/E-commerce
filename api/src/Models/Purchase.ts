import { DataTypes, Model, Sequelize } from "sequelize";

interface PurchaseAttributes {
id: string;
totalPrice: number | 0;
}

export default (sequelize: Sequelize) => {
    class Purchase extends Model<PurchaseAttributes> implements PurchaseAttributes{
        public id!: string;
        public totalPrice!: number;
    }
    Purchase.init(
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
            modelName: "Purchase",
          }
        );
      
        return Purchase;
}