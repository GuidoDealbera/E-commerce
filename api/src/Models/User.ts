import { DataTypes, Model, Sequelize } from "sequelize";
import { UserAttributes } from "../Interfaces/interfaces";

export default (sequelize: Sequelize) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    public id!: string;
    public googleId!: string;
    public facebookId!: string;
    public name!: string | null;
    public lastName!: string | null;
    public username!: string;
    public email!: string;
    public password!: string;
    public profilePhoto!: string | null;
    public phone!: string | null;
    public address!: string | null;
    public postalCode!: string | null;
    public interests!: string[] | null;
    public isActive!: boolean;
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      googleId: {
        type: DataTypes.STRING,
      },
      facebookId: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profilePhoto: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      postalCode: {
        type: DataTypes.STRING,
      },
      interests: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }
    },
    {
      sequelize,
      timestamps: false,
      modelName: "User",
    }
  );

  return User;
};
