import { Product } from '../../Interfaces/Products.interfaces';
import {createSlice} from '@reduxjs/toolkit';

export interface ProductState {
    allProducts: Product[],
    productDetail: Product | undefined
};

const initialState: ProductState = {
    allProducts: [],
    productDetail: undefined,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            state.allProducts = action.payload;
        },
        setProductDetail: (state, action) => {
            const product = state.allProducts.find((product) => product.id === action.payload);
            state.productDetail = product;
        },
        clearState: (state) => {
            state.productDetail = undefined;
        },
        postProduct: (state, action) => {
            const newProduct = action.payload;
            state.allProducts.push(newProduct);
        }
    },
});

export const {setAllProducts, setProductDetail, clearState, postProduct} = productSlice.actions;

export default productSlice.reducer;