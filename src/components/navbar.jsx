import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { FaPhoneAlt,FaSearch } from "react-icons/fa";

import logo from "/assets/logo.png";

const Navbar = () => {
  return (
    <div className="Navbar bg-black h-[4rem] w-full responsive-design px-14">
      <div className="flex justify-between items-center w-full h-full px-8">
       
        <div className="flex-none px-6">
          <img src={logo} alt="logo" />
        </div>

   
        <div className="flex-1 mx-8 hidden md:flex justify-center">
          {/* <FaSearch className="text-white"/> */}
          <input
            type="text"
            placeholder="What are you looking for..."
            className="w-[550px] max-w-full px-8 py-2 bg-[#1F1F1F] text-white border-none outline-none"
          />
        </div>

        {/* Telephone Number Section */}
        <div className="flex-none hidden md:flex items-center space-x-4 text-white text-xs">
          <FaPhoneAlt className="text-xl text-red-500 mr-2" />
          <span>
            itel Customer Care:<br /> 1800-4190-525
          </span>
        </div>

        {/* Mobile Icons */}
        <div className="icons text-white flex md:hidden">
          <div className="text-3xl mr-8">
            <GoSearch />
          </div>
          <div className="text-3xl">
            <FiAlignJustify />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
