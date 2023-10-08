import { UserAuth } from "../../Context/AuthContext";

interface DrawerProps {
  open: boolean;
}

const DrawerMenu: React.FC<DrawerProps> = ({ open }) => {
  let closeSession;
  const authContext = UserAuth();
  if(authContext){
    const {logOut} = authContext;
    closeSession = logOut;
  }
  return (
    <div
      className={`flex flex-col items-center pt-16 sm:hidden text-white absolute w-2/3 h-screen bg-gray-950 top-0 duration-300 ${
        open ? "left-0" : "left-[-100%]"
      }`}
    >
      <ul className="flex flex-col justify-center items-center pt-20 gap-4 font-medium uppercase px-7 py-2">
        <li>Inicio</li>
        <li>Novedades</li>
        <li>Destacados</li>
      </ul>
      <span className="translate-y-[13.5rem] text-center uppercase border-b border-t px-0 py-1 w-full" onClick={closeSession}>Cerrar Sesión</span>
    </div>
  );
};

export default DrawerMenu;
