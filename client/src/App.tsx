import {useEffect} from 'react';
import { useProductQuery } from "./Hooks/ApiHooks/useProductsQuery";
import { AuthContextProvider } from "./Context/AuthContext";
import AppRoutes from "./AppRoutes";

function App() {
  const {getAllProducts} = useProductQuery();
  useEffect(() => {
    getAllProducts();
  }, [])
  return (
    <AuthContextProvider>
      <AppRoutes/>
    </AuthContextProvider>
  )
}

export default App
