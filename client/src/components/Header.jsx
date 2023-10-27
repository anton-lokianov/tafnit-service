import { AiFillStar } from "react-icons/ai";
import { FaAddressBook, FaTools } from "react-icons/fa";
import { useState } from "react";
import { GiTowTruck } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  const location = useLocation();
  const locationName = location.pathname.split("/")[1];
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <>
      <div className="flex justify-between bg-indigo-800 px-10 py-[6px] w-full items-center h-full">
        <div className="flex gap-12 items-center">
          <div className="flex border items-center gap-3 border-black shadow-inner shadow-black text-slate-500 py-2 px-4 rounded-xl">
            <FaTools className="text-[1.6rem] hover:text-slate-200 hover:cursor-pointer ease-in-out transition-all" />
            <FaAddressBook className="text-[1.6rem] hover:text-slate-200 hover:cursor-pointer ease-in-out transition-all" />
            <AiFillStar className="text-[1.6rem] hover:text-slate-200 hover:cursor-pointer ease-in-out transition-all" />
          </div>
          {location.pathname === "/dashboard" && (
            <form
              action="https://www.google.com/search"
              method="get"
              target="_blank"
              className="flex gap-1"
            >
              <Input type="text" name="q" placeholder="search on google" />
              <Button className="secondaryBtn">
                <FcGoogle />
              </Button>
            </form>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[1.8rem] text-white">{fullName}</span>
          <span className="text-[2.1rem] font-bold text-slate-100">-</span>
          <span className="text-[1.8rem] text-white mr-2">{locationName}</span>
          <h1
            className="text-[2.1rem] hover:cursor-pointer flex items-center gap-2 text-white border-l-2 pl-7"
            onClick={() => navigate("/dashboard")}
          >
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
