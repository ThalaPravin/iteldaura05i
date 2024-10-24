import React from 'react';
import {FiChevronDown} from "react-icons/fi"


const Header = () => {
  return (
    <div className="bg-[#1F1F1F] text-white flex justify-center py-3 hidden lg:flex">
      <ul className="flex space-x-8 text-sm">
        <li className="group relative cursor-pointer">
          Smartphone <FiChevronDown className='inline' size={18}/>
          <div className="absolute left-0 hidden group-hover:block bg-gray-700 p-2 rounded shadow-lg">
            {/* Dropdown content goes here */}
            <a href="#" className="block text-white px-4 py-2">Model 1</a>
            <a href="#" className="block text-white px-4 py-2">Model 2</a>
          </div>
        </li>
        <li className="cursor-pointer">Feature Phones</li>
        <li className="group relative cursor-pointer">
          Smart TV <FiChevronDown className='inline' size={18}/>
          <div className="absolute left-0 hidden group-hover:block bg-gray-700 p-2 rounded shadow-lg">
            {/* Dropdown content */}
            <a href="#" className="block text-white px-4 py-2">Smart TV 1</a>
            <a href="#" className="block text-white px-4 py-2">Smart TV 2</a>
          </div>
        </li>
        <li className="cursor-pointer">Smart Gadgets</li>
        <li className="cursor-pointer">Home Care</li>
        <li className="cursor-pointer">Personal Care</li>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Support
        <FiChevronDown className='inline' size={18}/>
        </li>
      </ul>
    </div>
  );
};

export default Header;
