import { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiChevronDown } from "react-icons/bi";
import SearchBar from "../SearchBar/SearchBar";
import Catalog from "../Menu/Catalog";
import { categories } from "../../Utils/Features";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);
  const catalogoRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState<Boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const handleClick = (event: any) => {
    if (event.target.id === "button1") setOpen(!open);
  };
  const clickFuera = (event: any) => {
    if (catalogoRef.current && !catalogoRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", clickFuera);
    return () => {
      document.removeEventListener("click", clickFuera);
    };
  }, []);
  return (
    <div className="flex flex-row justify-between items-center sticky w-screen h-16 bg-[#7C91DF] px-4 gap-4">
      <button
        onClick={() => setShowDrawer(!showDrawer)}
        className="text-black block md:hidden"
      >
        <RxHamburgerMenu size={28} />
      </button>
      <img
        src="/LOGO.png"
        alt="companyLogo"
        className="hidden md:block w-16 h-16 rounded-full"
      />
      <SearchBar />
      <div className="hidden md:flex gap-16 items-center">
        <a href="#">Destacados</a>
        <button
          ref={catalogoRef}
          id="button1"
          onClick={handleClick}
          className="relative flex flex-row items-center gap-1 bg-gray-900 px-2 py-1 rounded-xl"
        >
          <p id="button1">Catálogo</p>
          <span
            className={`${
              open ? "rotate-180" : "rotate-0"
            } duration-200 text-lg`}
          >
            <BiChevronDown id="button1" />
          </span>
          <Catalog list={categories} open={open} />
        </button>
      </div>
      {!user ? (
        <button onClick={() => navigate('/auth/login')} className="bg-gray-900 px-2 py-1 rounded-xl shadow shadow-black active:shadow-none duration-200">
          Acceder
        </button>
      ) : (
        <img
          src={user.profilePhoto}
          alt="profilePhoto"
          className="w-12 h-12 rounded-full"
        />
      )}
    </div>
  );
};

export default NavBar;
