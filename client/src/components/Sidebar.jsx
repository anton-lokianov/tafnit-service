import { Link } from "react-router-dom";
import { sidebarNav } from "../utils/constants";

const Sidebar = () => {
  return (
    <div
      className="h-[46rem] w-[350px] bg-indigo-700 text-slate-50 shadow-md shadow-black z-40 p-10 absolute top-1/2 left-2
    transform -translate-y-1/2
    rounded-sm flex flex-col justify-between">
      <nav className="flex flex-col gap-2">
        {sidebarNav.map((item, idx) => (
          <Link
            to={item.path}
            key={idx}
            className="font-semibold hover:text-orange-500 ease-in-out transition-all">
            {item.name}
          </Link>
        ))}
      </nav>
      <h1 className="text-[4.5rem] border-t-2 text-center">Tafnit</h1>
    </div>
  );
};

export default Sidebar;
