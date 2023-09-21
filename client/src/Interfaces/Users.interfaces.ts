export interface User {
    id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    profilePhoto: string;
    phone: number;
    address: string;
    postalCode: number;
};

export interface IRegisterUser {
    username?: string;
    email: string;
    password: string;
    seller?: boolean; 
}