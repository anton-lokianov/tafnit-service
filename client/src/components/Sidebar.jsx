import { Link } from "react-router-dom";
import { sidebarNav } from "../utils/constants";

const Sidebar = () => {
  return (
    <div className="h-full p-2">
      <div
        className="bg-indigo-700 text-slate-50 py-2 px-6 shadow-md shadow-black w-[330px] 
        rounded-sm flex flex-col justify-between h-full ml-2">
        <nav className="flex flex-col gap-2">
          {sidebarNav.map((item, idx) => (
            <Link
              to={item.path}
              key={idx}
              className="font-semibold hover:text-orange-500 ease-in-out transition-all flex items-center gap-3">
              <span className="text-[1.5rem]">{item.icon}</span>
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
