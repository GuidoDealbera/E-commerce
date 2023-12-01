import { useProductQuery } from "../../Hooks/ApiHooks/useProductsQuery"
import Cards from "../Cards/Cards";
import {useEffect} from 'react';

const Home = () => {
  const {getAllProducts} = useProductQuery();
  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <div>
        <Cards/>
    </div>
  )
}

export default Home