import { HiOutlineLogout } from "react-icons/hi";
import { PROFILE_MENU_LINKS } from "../data";
import { useState, useEffect, useRef } from "react";
import image from "../../../../assets/2a2e7f0f60b750dfb36c15c268d0118d.jpg";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
const ProfileDrop: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

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

  return (
    <div className="relative">
      <Link
        to="#"
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium">Guido José Dealbera</span>
          <span className="block text-xs">Fullstack Developer</span>
        </span>
        <img src={image} alt="usuario" className="w-12 h-12 rounded-full" />
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
          className={`flex flex-col gap-5 border-b px-6 py-7 ${
            !dropdownOpen && "hidden"
          }`}
        >
          {PROFILE_MENU_LINKS.map((item) => (
            <li key={item.key}>
              <Link
                to="#"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 hover:text-blue-700 ease-in-out"
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <section className={`flex items-center px-6 ${
            !dropdownOpen && "hidden"
          }`}>
          <Link
            to="#"
            className="flex items-center gap-3.5 text-sm font-medium duration-300 hover:text-red-700 ease-in-out"
          >
            <span>
              <HiOutlineLogout />
            </span>
            Cerrar Sesión
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ProfileDrop;
