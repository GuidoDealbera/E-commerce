export interface UserAttributes {
  id: string;
  googleId: string;
  facebookId: string;
  name: string | null;
  lastName: string | null;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  profilePhoto: string | null;
  phone: string | null;
  address: string | null;
  postalCode: string | null;
  interests: string[] | null;
  isActive: boolean;
}

export interface ProductAttributes {
  id: string;
  name: string;
  description: string | null;
  code: string;
  photos: string[];
  price: number | 0;
  stock: number | 0;
  heading: string | null;
}

export interface PurchaseAttributes {
  id: string;
  totalPrice: number | 0;
}

export interface CategoryAttributes {
  id: string;
  name: string;
}

export interface ReviewAttributes {
  id: string;
  score: number | 0;
  comment: string | null;
  amountScores: number | 0;
  averageScore: number | 0;
  username: string | null;
}

export interface SaleAttributes {
  id: string;
  totalPrice: number | 0;
}

export interface JWTPayload {
  id: string;
  email: string;
}