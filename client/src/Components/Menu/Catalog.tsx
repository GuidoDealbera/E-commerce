interface CatalogProps {
    list: string[];
    open: Boolean;
}

const Catalog: React.FC<CatalogProps> = ({list, open}) => {
    return (
        <div className={`absolute top-9 right-0 w-max ${open ? "translate-y-0 z-[999]" : "opacity-0 translate-y-5 z-[-999]"} duration-200 cursor-default bg-gray-900 border border-white rounded-xl`}>
        <ul className="flex flex-col items-start">
            {list.map((cat, i) => <li key={i} className={`${open ? "cursor-pointer" : "cursor-default"} ${i === list.length - 1 && "rounded-b-xl"} ${i === 0 && "rounded-t-xl"} p-2 w-full text-start ${i !== list.length - 1 && "border-b-2"} hover:bg-gray-800 duration-100`}>{cat}</li>)}
        </ul>
        </div>
    )
};

export default Catalog;