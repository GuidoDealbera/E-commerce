import { DataTypes, Model, Sequelize } from "sequelize";
import { CategoryAttributes } from "../Interfaces/interfaces";


export default (sequelize: Sequelize) => {
  class Category
    extends Model<CategoryAttributes>
    implements CategoryAttributes
  {
    public id!: string;
    public name!: string;
  }

  Category.init(
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
    },
    { 
        sequelize, 
        timestamps: false, 
        modelName: "Category" 
    },
  );
  
  return Category;
};
