export interface User {
    id: string;
    name: string | undefined;
    lastName: string | undefined;
    email: string | null;
    password?: string;
    profilePhoto: string | undefined;
    phone: string | null;
    address: string;
    postalCode: string;
};

export interface IRegisterUser {
    username?: string;
    email: string;
    password: string;
    seller?: boolean; 
}