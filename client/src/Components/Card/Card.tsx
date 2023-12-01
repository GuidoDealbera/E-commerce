import { BiCartAdd, BiStar } from "react-icons/bi";
import { Product } from "../../Interfaces/Products.interfaces";
import { BsHeart } from "react-icons/bs";

interface Props {
    product: Product
}

const Card = ({product}: Props) => {
    return (
        <div className="flex flex-col w-60 h-72 rounded-lg bg-white text-black">
            <div className="flex flex-col w-full h-full px-2 py-1">
            <section className="w-full h-max mb-4">
            <img src={product.photos[0]} alt={product.name} className="w-full h-full object-cover"/>
            </section>
            <section className="flex flex-col gap-2">
                <span className="text-center font-medium text-lg">{product.name}</span>
                <p className="text-center text-2xl font-semibold">${product.price}</p>
            </section>
            </div>
            <section className="flex w-full justify-between items-center pl-2">
            <span className="flex gap-0.5">
                <BiStar/>
                <BiStar/>
                <BiStar/>
                <BiStar/>
                <BiStar/>
            </span>
            <span>
                <BsHeart/>
            </span>
            <button className="flex justify-center items-center bg-orange-500 text-black text-2xl rounded-tl-3xl rounded-br-lg px-4 py-2">
                <BiCartAdd/>
            </button>
            </section>
        </div>
    )
};

export default Card;