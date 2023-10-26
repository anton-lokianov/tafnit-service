import { Link } from "react-router-dom";
import { sidebarNav } from "../utils/constants";

const Sidebar = () => {
  return (
    <div className="flex min-h-full items-center">
      <div
        className="bg-indigo-700 text-slate-50 py-2 px-6 shadow-md shadow-black w-[330px] 
        rounded-sm flex flex-col justify-between h-[520px] ml-2"
      >
        <nav className="flex flex-col gap-2">
          {sidebarNav.map((item, idx) => (
            <Link
              to={item.path}
              key={idx}
              className="font-semibold hover:text-orange-500 ease-in-out transition-all"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <h1 className="text-[4.3rem] border-t-2 text-center">Tafnit</h1>
      </div>
    </div>
  );
};

export default Sidebar;
