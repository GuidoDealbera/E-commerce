export interface Product {
    id: string;
    name: string;
    description: string | null;
    code: string;
    photos: string[];
    category: string;
    price: number | 0;
    stock: number | 0;
    heading: string | null;
}