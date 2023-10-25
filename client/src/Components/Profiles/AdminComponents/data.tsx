import {
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineDocumentText,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";
import {BsFillFilePersonFill} from 'react-icons/bs'
import {FaUsers, FaTruck} from 'react-icons/fa6';
import { FiHome } from "react-icons/fi";
export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "profile",
    label: "Perfil",
    icon: <BsFillFilePersonFill/>,
  },
  {
    key: "products",
    label: "Stock disponible",
    icon: <HiOutlineCube/>,
  },
  {
    key: "users",
    label: "Usuarios",
    icon: <FaUsers/>,
  },
  {
    key: "orders",
    label: "Ventas",
    icon: <HiOutlineShoppingCart/>,
  },
  {
    key: "truck",
    label: "Envíos",
    icon: <FaTruck/>,
  },
  {
    key: "transactions",
    label: "Transacciones",
    icon: <HiOutlineDocumentText/>,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Configuración",
    icon: <HiOutlineCog/>,
  },
  {
    key: "support",
    label: "Soporte Técnico",
    icon: <HiOutlineQuestionMarkCircle/>,
  },
];

export const PROFILE_MENU_LINKS = [
  {
    key: "home",
    label: "Inicio",
    redirect: "/",
    icon: <FiHome/>
  },
  {
    key: "profile",
    label: "Perfil",
    redirect: "/",
    icon: <BsFillFilePersonFill/>
  },
]