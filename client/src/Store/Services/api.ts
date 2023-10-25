import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../Interfaces/Products.interfaces";
import { ILogin } from "../../Interfaces/Auth.interfaces";
import { IRegisterUser } from "../../Interfaces/Users.interfaces";
//importar interfaces para tipar lo que necesitemos

const API_URL: string = "http://localhost:3001";
//const API_URL:string = "link para cuando se deploye el back";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
});

export const api = createApi({
  baseQuery,
  endpoints: (builder) => ({
    //acá se agregarán las funciones que necesitemos para hacer las petisiones al back;
    //AUTH ENDPOINTS
    authLocal: builder.mutation({
      query: (body: ILogin) => ({
        url: "/auth/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body
      }),
    }),
    //PRODUCTS ENDPOINTS
    getAllProducts: builder.mutation({
      query: () => ({
        url: "/getAllProducts",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }),
    }),
    postProduct: builder.mutation({
      query: (product: Product) => ({
        //deberiamos agregar la lógica correspondiente para que no deje postear un producto si no se inició sesión
        url: "/postProduct",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: product,
      }),
    }),
    //USERS ENDPOINTS
    getAllUsers: builder.mutation({
      query: (token: string | null) => ({
        url: "/getAllUsers",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        },
      }),
    }),
    getProfile: builder.mutation({
      query: (token: string | null) => ({
        url: "/profile",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      })
    }),
    postUser: builder.mutation({
      query: (body: IRegisterUser) => ({
        url: "/create/user",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body,
      }),
    }),
  }),
});

/*en la siguiente linea exportaremos las petisiones que vamos a usar en los custom hooks
Por ejemplo:
Si el endpoint se llama getUserById, lo que exportaremos se llama useGetUserByIdQuery (o Mutation al final en lugar de query)
*/
export const {
  useAuthLocalMutation,
  useGetAllProductsMutation,
  useGetAllUsersMutation,
  usePostProductMutation,
  usePostUserMutation,
  useGetProfileMutation
} = api;
