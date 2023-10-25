import { BiSearch } from "react-icons/bi";
import ProfileDrop from "./Dropdown/ProfileDrop";
import NotificationDrop from "./Dropdown/NotificationDrop";
import { FcBullish } from "react-icons/fc";
import { FiMenu } from "react-icons/fi";


interface Props {
  activeTab: string;
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({
  activeTab,
  showSidebar,
  setShowSidebar,
}) => {

  return (
    <header className="sticky z-10 top-0 flex w-full bg-gray-800 drop-shadow-sm">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-sm md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button aria-controls="sidebar" onClick={(e) => {
            e.stopPropagation();
            setShowSidebar(!showSidebar)
          }}>
            <FiMenu size={28}/>
          </button>
            <FcBullish size={24}/>
        </div>
        {
          activeTab === 'products' && 
          <div className="hidden sm:block">
            <form>
              <div className="relative">
                <button className="absolute top-1/2 left-0 -translate-y-1/2">
                  <BiSearch size={22} className="text-gray-400 hover:text-blue-900"/>
                </button>
                <input type="text" placeholder="Busca tus productos..." className="w-full bg-transparent pr-4 pl-9 focus:outline-none"/>
              </div>
            </form>
          </div>
        }
        <div className={`flex items-center ${activeTab !== 'products' && "w-full justify-end"} gap-3 min-[300px]:gap-7`}>
          <ul className="flex items-center gap-8 min-[300px]:gap-4">
            <NotificationDrop/>
            <ProfileDrop/>            
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
