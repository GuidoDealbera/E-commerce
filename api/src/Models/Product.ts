import { DataTypes, Model, Sequelize } from "sequelize";
import { ProductAttributes } from "../Interfaces/interfaces";


export default (sequelize: Sequelize) => {
  class Product extends Model<ProductAttributes> implements ProductAttributes {
    public id!: string;
    public name!: string;
    public description!: string | null;
    public code!:string;
    public photos!: string[];
    public price!: number | 0;
    public stock!: number | 0;
    public heading!: string | null;
  }

  Product.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
      },
      code: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      photos: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      price: {
        type: DataTypes.DECIMAL(5, 2),
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      heading: {
        type: DataTypes.STRING,
      }
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Product",
    }
  );

  return Product;
};