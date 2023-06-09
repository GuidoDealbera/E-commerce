"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class User extends sequelize_1.Model {
    }
    User.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING,
        },
        username: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        profilePhoto: {
            type: sequelize_1.DataTypes.STRING,
        },
        phone: {
            type: sequelize_1.DataTypes.STRING,
        },
        address: {
            type: sequelize_1.DataTypes.STRING,
        },
        postalCode: {
            type: sequelize_1.DataTypes.STRING,
        },
        interests: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        },
        seller: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, {
        sequelize,
        timestamps: false,
        modelName: "User",
    });
    return User;
};
