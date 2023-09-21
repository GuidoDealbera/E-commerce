import { useForms } from "../../Hooks/useForms"
import {FaSearch} from 'react-icons/fa'
const SearchBar = () => {
   const {search} = useForms();
   const {input, onChange, onSubmit, handleKeyPress} = search();
  return (
    <form className="w-52 sm:w-64">
        <div className="relative">
        <input type="search" name="input" value={input} onChange={onChange} onKeyDown={handleKeyPress} placeholder="Busca tus productos..." className="bg-gray-900 text-gray-400 font-medium outline-none w-full p-2 rounded-full"/>
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-[#7C91DF] text-gray-900 rounded-full" onClick={onSubmit}>
            <FaSearch/>
        </button>
        </div>
    </form>
  )
}

export default SearchBar