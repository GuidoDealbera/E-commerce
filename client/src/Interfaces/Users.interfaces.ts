import { Product } from "./Products.interfaces";

export interface User {
    id: string;
    googleId: string;
    facebookId: string;
    name: string | null;
    lastName: string | null;
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
    gender: string;
    profilePhoto: string | null;
    coverPhoto: string | null;
    phone: string | null;
    address: string | null;
    postalCode: string | null;
    interests: string[] | null;
    isActive: boolean;
    Products: Product[]
};

export interface IRegisterUser {
    email: string;
    password: string;
    confirmPassword: string;
}