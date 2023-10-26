import { AiFillStar } from "react-icons/ai";
import { FaAddressBook, FaTools } from "react-icons/fa";
import { useState } from "react";
import { GiTowTruck } from "react-icons/gi";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const locationName = location.pathname.split("/")[1];

  return (
    <>
      <div className="flex justify-between bg-indigo-800 px-10 py-[6px] w-full items-center h-full">
        <div className="flex border items-center gap-3 border-black shadow-inner shadow-black text-slate-500 py-2 px-4 rounded-xl">
          <FaTools className="text-[1.6rem] hover:text-white hover:cursor-pointer ease-in-out transition-all" />
          <FaAddressBook className="text-[1.6rem] hover:text-white hover:cursor-pointer ease-in-out transition-all" />
          <AiFillStar className="text-[1.6rem] hover:text-white hover:cursor-pointer ease-in-out transition-all" />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[1.8rem] text-white">anton lokianov</span>
          <span className="text-[2.1rem] font-bold text-slate-100">-</span>
          <span className="text-[1.8rem] text-white mr-2">{locationName}</span>
          <h1 className="text-[2.1rem] flex items-center gap-2 text-white border-l-2 pl-7">
            Tafnit
            <span className="text-orange-500">
              <GiTowTruck />
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
