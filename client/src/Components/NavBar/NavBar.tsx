import { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import SearchBar from "../SearchBar/SearchBar";
import Catalog from "../Menu/Catalog";
import { categories } from "../../Utils/Features";
import { useLocation, useNavigate } from "react-router-dom";
import DrawerMenu from "../Menu/DrawerMenu";
import image from "../../assets/2a2e7f0f60b750dfb36c15c268d0118d.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import ProfileMenu from "../Menu/ProfileMenu";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user: userAuth } = useSelector((state: RootState) => state.profile);
  const catalogoRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState<Boolean>(false);
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);
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
  const exclusedRoutes = [
    "/auth/login",
    "/auth/callback",
    "/register",
    "/forgot-password",
    "/recovery-password",
    "/prueba"
  ];
  if (exclusedRoutes.includes(location.pathname) || (userAuth?.isAdmin && location.pathname === `/profile/${userAuth.id}`)) return null;
  return (
    <nav className="flex flex-row justify-between items-center sticky w-screen h-16 bg-[#7C91DF] px-4 gap-4">
      <button
        onClick={() => setShowDrawer(!showDrawer)}
        className={`${
          showDrawer ? "text-white z-[999]" : "text-black"
        } duration-150 block md:hidden`}
      >
        {!showDrawer ? (
          <RxHamburgerMenu size={28} />
        ) : (
          <AiOutlineClose size={28} />
        )}
      </button>
      <DrawerMenu open={showDrawer} />
      <img
        src="/LOGO.png"
        alt="companyLogo"
        className="hidden md:block w-16 h-16 rounded-full"
      />
      <div className="hidden sm:block relative -z-10">
        <SearchBar />
      </div>
      <div className="sm:hidden">
      <img
        src="/LOGO.png"
        alt="companyLogo"
        className="w-16 h-16 rounded-full"
      />
      </div>
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
      {!userAuth ? (
        <button
          onClick={() => navigate("/auth/login")}
          className="bg-gray-900 px-2 py-1 rounded-xl shadow shadow-black active:shadow-none duration-200"
        >
          Acceder
        </button>
      ) : (
        <button className="relative" onClick={() => setShowProfileMenu(!showProfileMenu)}>
          <img
            src={userAuth.profilePhoto ? userAuth.profilePhoto : image}
            alt="profilePhoto"
            className="w-12 h-12 rounded-full"
          />
          <ProfileMenu open={showProfileMenu}/>
        </button>
      )}
    </nav>
  );
};

export default NavBar;
