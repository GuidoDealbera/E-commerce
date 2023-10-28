import { HiOutlineLogout } from "react-icons/hi";
import { PROFILE_MENU_LINKS } from "../data";
import { useState, useEffect, useRef } from "react";
import image from "../../../../assets/2a2e7f0f60b750dfb36c15c268d0118d.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store/store";
import { useAuthQuery } from "../../../../Hooks/ApiHooks/useAuthQuery";

interface Props {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileDrop: React.FC<Props> = ({ setActiveTab }) => {
  const { logOut } = useAuthQuery();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const { user } = useSelector((state: RootState) => state.profile);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  useEffect(() => {
    const clickFuera = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickFuera);
    return () => document.removeEventListener("click", clickFuera);
  });
  const rol = () => {
    if (user?.gender === "male") return "Administrador";
    if (user?.gender === "female") return "Administradora";
    if (user?.gender === "other") return "Admin";
  };
  const toHome = (event: any) => {
    if(event.target.id === 'profile'){
      setActiveTab(event.target.id)
    } else {
      navigate('/')
    }
  }
  return (
    <div className="relative">
      <Link
        to="#"
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium">
            {user?.name} {user?.lastName}
          </span>
          <span className="block text-xs text-gray-500 tracking-[2px] uppercase">{rol()}</span>
        </span>
        <img
          src={user?.profilePhoto ? user.profilePhoto : image}
          alt="usuario"
          className="w-12 h-12 rounded-full"
        />
        <BiChevronDown
          className={`hidden fill-current sm:block ${
            dropdownOpen && "rotate-180"
          } transition-all duration-300`}
        />
      </Link>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-[15.5rem] flex-col rounded-sm border bg-gray-800 border-neutral-700 ${
          dropdownOpen ? "h-max z-50" : "h-0 opacity-0"
        } transition-all duration-300`}
      >
        <ul
          className={`flex flex-col gap-0.5 border-b ${
            !dropdownOpen && "hidden"
          }`}
        >
          {PROFILE_MENU_LINKS.map((item) => (
            <li
              key={item.key}
              className="px-4 py-2 hover:bg-gray-900 duration-200"
            >
              <button
                id={item.key}
                onClick={toHome}
                className="flex items-center gap-4"
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <section
          className={`flex items-center px-4 py-2 hover:bg-gray-900 duration-200 ${
            !dropdownOpen && "hidden"
          }`}
        >
          <button
            onClick={logOut}
            className="flex items-center gap-4 text-red-700"
          >
            <span>
              <HiOutlineLogout />
            </span>
            Cerrar Sesión
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProfileDrop;
