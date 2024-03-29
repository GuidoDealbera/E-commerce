import { useAuthQuery } from "../../Hooks/ApiHooks/useAuthQuery";

interface DrawerProps {
  open: boolean;
}

const DrawerMenu: React.FC<DrawerProps> = ({ open }) => {
  const {logOut} = useAuthQuery();
  return (
    <div
      className={`flex flex-col items-center pt-16 md:hidden text-white absolute z-[999px] w-[280px] sm:w-[400px] h-screen bg-gray-950 top-0 duration-300 ${
        open ? "left-0" : "left-[-100%]"
      }`}
    >
      <ul className="flex flex-col justify-center items-center pt-20 gap-4 font-medium uppercase px-7 py-2">
        <li>Inicio</li>
        <li>Novedades</li>
        <li>Destacados</li>
      </ul>
      <span className="translate-y-[13.5rem] text-center uppercase border-b border-t px-0 py-1 w-full" onClick={logOut}>Cerrar Sesión</span>
    </div>
  );
};

export default DrawerMenu;
