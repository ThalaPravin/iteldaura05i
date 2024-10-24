import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { MdHd } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';

const DisplayComponent = () => {
  return (
    <div className="relative bg-white p-4 mx-24 my-14 mx-auto rounded-lg shadow-lg ">
      
      <div className="relative">
       
        <img
          src="./assets/displayimage.png" 
          alt="Elephant Display"
          className="rounded-t-lg"
        />
{/* 
<div className="bg-white p-4 flex justify-between items-center space-x-4 rounded-b-lg border-t border-gray-300 ">
        <div className="flex items-center space-x-2">
          <FaMobileAlt className="text-lg" />
          <span className="text-gray-700 text-sm md:text-base">6.6" Large Screen Size</span>
        </div>
        <div className="flex items-center space-x-2">
          <MdHd className="text-lg" />
          <span className="text-gray-700 text-sm md:text-base">HD+ Resolution</span>
        </div>
        <div className="flex items-center space-x-2">
          <BsSun className="text-lg" />
          <span className="text-gray-700 text-sm md:text-base">450 NITS</span>
        </div>
      </div> */}


      </div>

     
    
    </div>
  );
};

export default DisplayComponent;
