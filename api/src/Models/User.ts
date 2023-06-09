import { DataTypes, Model, Sequelize } from "sequelize";

interface UserAttributes {
  id: string;
  name: string | null;
  lastName: string | null;
  username: string;
  email: string;
  password: string;
  profilePhoto: string | null;
  phone: string | null;
  address: string | null;
  postalCode: string | null;
  interests: string[] | null;
  seller: boolean;
}

export default (sequelize: Sequelize) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    public id!: string;
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
    public seller!: boolean;
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
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
      seller: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "User",
    }
  );

  return User;
};
