import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { useAuthQuery } from "../../Hooks/ApiHooks/useAuthQuery";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { BsFillFilePersonFill } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";

interface Props {
  open: boolean;
}
const ProfileMenu: React.FC<Props> = ({ open }) => {
  const { logOut } = useAuthQuery();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.profile);
  const listMenu = [
    { text: "Inicio", redirect: "/", icon: <FiHome /> },
    {
      text: "Perfil",
      redirect: `/profile/${user?.id}`,
      icon: <BsFillFilePersonFill />,
    },
    { text: "Mis Compras", redirect: "#", icon: <FaCartShopping /> },
  ];
  const handleNavigate = (event: React.SyntheticEvent, redirect: string) => {
    event.preventDefault();
    if (window.location.href !== redirect) {
      return navigate(redirect);
    }
  };
  return (
    <div
      className={`flex flex-col absolute bg-[#7C91DF] w-max right-0 pt-2 px-2 overflow-y-auto rounded-b-xl top-14 ${
        open ? "z-[999] h-max" : "h-0 opacity-0 -z-[999]"
      } duration-300`}
    >
      <ul className="flex flex-col justify-center gap-2">
        {listMenu.map((item, index) => (
          <li
            key={index}
            className="text-gray-900 px-2 flex justify-start items-center gap-4 w-full"
            onClick={(event) => handleNavigate(event, item.redirect)}
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </li>
        ))}
        <li
          onClick={logOut}
          className="text-gray-900 px-2 flex justify-start items-center gap-4 w-full py-2 mt-4 border-t border-gray-900"
        >
          <span>
            <BiLogOut />
          </span>
          <span>Cerrar Sesión</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
