import {useState, useEffect, useRef} from 'react';
import { BsBell } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const NotificationDrop: React.FC = () => {
    const NOTIFICATIONS = [
        "Nueva notificación",
        "Nueva notificación",
        "Nueva notificación",
        "Nueva notificación",
        "Nueva notificación",
        "Nueva notificación",
        "Nueva notificación",
        "Nueva notificación",
        "Nueva notificación",
        "Nueva notificación",
    ]
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);
  
    useEffect(() => {
      const clickHandler = ({ target }: MouseEvent) => {
        if (!dropdown.current) return;
        if (
          !dropdownOpen ||
          dropdown.current.contains(target) ||
          trigger.current.contains(target)
        )
          return;
        setDropdownOpen(false);
      };
      document.addEventListener('click', clickHandler);
      return () => document.removeEventListener('click', clickHandler);
    });
  return (
    <li className='relative'>
      <Link ref={trigger} onClick={() => setDropdownOpen(!dropdownOpen)} to="#" className='relative flex h-8 w-8 items-center justify-center rounded-full border-[0.5px] bg-gray-900'>
        <span className='absolute -top-0.5 right-0 z-10 h-2 w-2 rounded-full bg-red-600'>
          <span className='absolute -z-10 inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75'></span>
        </span>
        <BsBell size={19} className="fill-current duration-300 ease-in-out"/>
      </Link>
      <div ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)} className={`absolute -right-28 mt-2.5 flex w-[18.5rem] flex-col rounded-sm border border-neutral-700 bg-gray-800 sm:right-0 sm:w-80 ${
        dropdownOpen ? "h-[22.5rem] z-50" : "h-0 opacity-0"
      } transition-all duration-300`}>
        <div className='px-4 py-3'>
          <h5 className='text-sm font-medium'>Notificaciones</h5>
        </div>
        <ul className='flex h-auto flex-col overflow-y-auto'>
          {
            NOTIFICATIONS.map((item, i) => (
              <li key={i} className={`${dropdownOpen ? "block" : "hidden"}`}>
                <Link to="#" className='flex flex-col gap-2.5 border-t border-neutral-700 px-4 py-3 hover:bg-gray-700'>
                {item}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </li>
  );
};

export default NotificationDrop;
