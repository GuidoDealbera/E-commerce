import { useDispatch } from "react-redux";
import {
  useGetAllProductsMutation,
  usePostProductMutation,
} from "../../Store/Services/api";
import { addProduct, setAllProducts } from "../../Store/Features/productSlice";
import { Product } from "../../Interfaces/Products.interfaces";

export const useProductQuery = () => {
  const [getProducts] = useGetAllProductsMutation();
  const [postProduct] = usePostProductMutation();
  const dispatch = useDispatch();
  const getAllProducts = async (
    errorCallback?: (...arg: any) => Promise<void>,
    successCallback?: (...arg: any) => Promise<void>
  ) => {
    try {
      const response: any = await getProducts("");
      if (response.error)
        return errorCallback && errorCallback("Acceso denegado");
      if (response.data) {
        await dispatch(setAllProducts(response.data));
        return successCallback && successCallback("Productos cargados");
      }
    } catch (error) {
      console.log(error);
      if (errorCallback) await errorCallback();
      return error;
    }
  };

  const createProduct = async (
    body: Product,
    errorCallback?: (...arg: any) => Promise<void>,
    successCallback?: (...arg: any) => Promise<void>
  ) => {
    try {
      const response: any = await postProduct(body);
      if(response.error) return errorCallback && errorCallback("Acceso denegado");
      if(response.data) {
        await dispatch(addProduct(response.data))
        return successCallback && successCallback("Producto publicado con exito");
      } 
    } catch (error) {
      console.log(error);
      if (errorCallback) await errorCallback();
      return error;
    }
  };
  return {
    getAllProducts,
    createProduct,
  };
};
