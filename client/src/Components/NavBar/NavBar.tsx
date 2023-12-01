import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import DrawerMenu from "../Menu/DrawerMenu";
import image from "../../assets/2a2e7f0f60b750dfb36c15c268d0118d.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import ProfileMenu from "../Menu/ProfileMenu";
import Switch from "../Switch/Switch";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user: userAuth } = useSelector((state: RootState) => state.profile);
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const exclusedRoutes = [
    "/auth/login",
    "/auth/callback",
    "/register",
    "/forgot-password",
    "/recovery-password",
    "/prueba",
  ];
  if (
    exclusedRoutes.includes(location.pathname) ||
    (userAuth?.isAdmin && location.pathname === `/profile/${userAuth.id}`)
  )
    return null;
  return (
    <nav className="flex justify-between items-center sticky py-1 w-screen h-24 bg-[#FF9315] dark:bg-[#403B36] font-Jost px-4 gap-4">
      <section className="flex items-center gap-5">
      <button onClick={() => setShowDrawer(!showDrawer)} className="block md/lg:hidden relative z-50">
        {
          !showDrawer ? <RxHamburgerMenu size={24}/> : <AiOutlineClose size={24}/>
        }
      </button>
      <DrawerMenu open={showDrawer}/>
      <img
        src="/UMBRELLA.png"
        alt="logo"
        className="w-20 h-20 bg-white rounded-lg p-2 hidden mg:block"
      />
      </section>
      <div className="flex gap-10">
        <div className="hidden md/lg:flex gap-4">
          <button>Destacados</button>
          <button>Catálogo</button>
        </div>
        <SearchBar />
        <button className="hidden md/lg:block">Contacto</button>
      </div>
      <div className="flex gap-8 items-center">
        <section className="hidden mg:block">
        <Switch />
        </section>
        {
          !userAuth ? 
        <section className="flex gap-4">
        <button onClick={() => navigate('/register')} className="p-1 bg-gray-200 text-black rounded-md hover:bg-gray-300 active:bg-gray-100">Registrarse</button>
        <button onClick={() => navigate('/auth/login')} className="p-1 bg-gray-100 text-black rounded-md hover:bg-gray-200 active:bg-gray-50">Iniciar</button>
        </section>
        : (
          <button onClick={() => setShowProfileMenu(!showProfileMenu)} className="relative w-16 h-16 rounded-full">
            <img src={userAuth?.profilePhoto ? userAuth.profilePhoto : image} alt={`${userAuth.name}`} className="w-16 rounded-full object-cover"/>
            <ProfileMenu open={showProfileMenu}/>
          </button>
        )
        }
      </div>
    </nav>
  );
};

export default NavBar;
