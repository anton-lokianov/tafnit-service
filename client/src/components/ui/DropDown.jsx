import { NavLink } from "react-router-dom";

const DropDown = ({
  id,
  icon: Icon,
  options,
  isActive,
  onToggle,
  onItemClick,
}) => {
  const activeClass = isActive
    ? "opacity-100 translate-y-0 pointer-events-auto"
    : "opacity-0 -translate-y-2 pointer-events-none";

  return (
    <div className="relative inline-block text-left group">
      <div
        onClick={() => onToggle(id)}
        className={`text-[1.6rem] cursor-pointer ease-in-out transition-all ${
          isActive ? "text-slate-200" : "hover:text-slate-200"
        }`}>
        <Icon />
      </div>
      <div
        className={`transition ease-in-out shadow-md shadow-black duration-300 transform absolute z-40 -right-11 mt-5 w-28 rounded-md bg-slate-500 origin-top-right ${activeClass}`}
        role="menu"
        aria-orientation="vertical">
        <div className="absolute w-4 h-4 bg-slate-500 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />

        <div className="py-1" role="none">
          {options.map((option, index) => (
            <NavLink
              to={option.href}
              className="flex flex-col px-4 py-2 text-sm text-slate-200 hover:text-orange-600"
              role="menuitem"
              key={index}
              onClick={() => onItemClick(id)}>
              {option.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
