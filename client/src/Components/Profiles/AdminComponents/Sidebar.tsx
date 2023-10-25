import { FcBullish } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "./data";
import { HiOutlineLogout } from "react-icons/hi";
import {useEffect, useRef, useState} from 'react';
import { FaXmark } from "react-icons/fa6";

interface Props {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  showSidebar: boolean;
  activeTab: string;
}

const Sidebar: React.FC<Props> = ({ setActiveTab, setShowSidebar , showSidebar, activeTab }) => {
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !showSidebar ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setShowSidebar(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside ref={sidebar} className={`bg-gray-800 w-72 h-screen p-3 flex flex-col absolute left-0 top-0 z-50 lg:static lg:translate-x-0 ${showSidebar ? "translate-x-0" : "-translate-x-full"} transition-all duration-300`}>
      <div className="flex justify-between w-full items-center gap-2 px-6 py-5 lg:py-6">
        <section className="flex justify-center items-center gap-2">
        <FcBullish size={24} />
        <span className="text-xl text-gray-200 tracking-[1.5px]">E-Commerce</span>
        </section>
        <button ref={trigger} onClick={() => setShowSidebar(!showSidebar)} aria-controls="sidebar" aria-expanded={showSidebar} className="absolute top-9 right-3 block lg:hidden">
          <FaXmark size={24} />
        </button>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <button
            onClick={() => setActiveTab(item.key)}
            key={item.key}
            className={`flex items-center gap-2 font-light px-3 py-2 hover:bg-gray-950 hover:no-underline active:bg-gray-600 rounded-sm text-base ${
              activeTab === item.key ? "bg-gray-950 text-white" : "text-neutral-400"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item => (
            <button
            onClick={() => setActiveTab(item.key)}
            key={item.key}
            className={`flex items-center gap-2 font-light px-3 py-2 hover:bg-gray-950 hover:no-underline active:bg-gray-600 rounded-sm text-base ${
              activeTab === item.key ? "bg-gray-950 text-white" : "text-neutral-400"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </button>
        ))}
        <button className="flex items-center gap-2 font-light px-3 py-2 hover:bg-gray-950 hover:no-underline active:bg-neutral-600 rounded-sm text-base cursor-pointer text-red-500">
            <span className="text-xl rotate-180"><HiOutlineLogout/></span>
            Cerrar Sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
