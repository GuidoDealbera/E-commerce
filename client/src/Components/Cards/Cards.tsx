import { useSelector } from "react-redux";
import SearchBar2 from "../SearchBar/SearchBar2";
import { RootState } from "../../Store/store";
import Card from "../Card/Card";

const Cards: React.FC = () => {
  const {allProducts} = useSelector((state: RootState) => state.product);
  return (
    <div>
      <section className="sm:hidden w-full flex justify-start pl-2 mt-2">
        <SearchBar2 />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 place-items-center">
        {
          allProducts.map((prod, i) => (
            <Card key={i} product={prod}/>
          ))
        }
      </section>
    </div>
  );
};

export default Cards;
