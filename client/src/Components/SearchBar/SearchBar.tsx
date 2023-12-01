import { useForms } from "../../Hooks/useForms"
import {FaSearch} from 'react-icons/fa'
const SearchBar = () => {
   const {search} = useForms();
   const {input, onChange, onSubmit, handleKeyPress} = search();
  return (
    <form className="w-56 md:w-64 hidden sm:block">
        <div className="relative">
        <input type="search" name="input" value={input} onChange={onChange} onKeyDown={handleKeyPress} placeholder="Busca tus productos..." className="bg-[#FFD9AD] text-black outline-none w-full p-1 rounded-lg"/>
        <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#FFD9AD] p-1 text-gray-900 rounded-xl text-sm" onClick={onSubmit}>
            <FaSearch/>
        </button>
        </div>
    </form>
  )
}

export default SearchBar