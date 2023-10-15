import { DataTypes, Model, Sequelize } from "sequelize";
import { ReviewAttributes } from "../Interfaces/interfaces";

export default (sequelize: Sequelize) => {
    class Reviews extends Model<ReviewAttributes> implements ReviewAttributes {
        public id!: string;
        public score!: number | 0;
        public comment!: string | null;
        public amountScores!: number | 0;
        public averageScore!: number | 0;
        public username!: string | null;
    }

    Reviews.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            score: {
                type: DataTypes.INTEGER,
                validate:{
                    max: 5,
                    min: 1
                }
            },
            comment: {
                type: DataTypes.TEXT,
            },
            amountScores: {
                type: DataTypes.INTEGER,
            },
            averageScore: {
                type: DataTypes.INTEGER,
            },
            username: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            timestamps: false,
            modelName: "Reviews",
          }
    )
    return Reviews;
}