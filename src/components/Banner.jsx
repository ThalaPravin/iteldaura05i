import React from 'react';
import { AiFillCaretRight,AiFillCaretUp } from 'react-icons/ai';

const BannerComponent = () => {
  return (
    <div className="bg-gray-100 py-2 mt-14">
      
      <div className="flex items-center justify-center space-x-4 text-gray-700 text-sm md:text-base font-semibold ">
        <span>IMPRESSIVELY AWESOME</span>
        <div className='bg-white px-2 rounded-xl'>
        <AiFillCaretUp className="text-xl" /> 
        </div>
        <span>AWESOME SERIES</span>
        <div className='bg-white px-2 rounded-xl'>
        <AiFillCaretUp className="text-xl" /> 
        </div>
        <span>IMPRESSIVELY AWESOME</span>
        <div className='bg-white px-2 rounded-xl'>
        <AiFillCaretUp className="text-xl" /> 
        </div>
        <span>AWESOME SERIES</span>
        <div className='bg-white px-2 rounded-xl'>
        <AiFillCaretUp className="text-xl" /> 
        </div>
        <span>IMPRESSIVELY AWESOME</span>
        <div className='bg-white px-2 rounded-xl'>
        <AiFillCaretUp className="text-xl" /> 
        </div>
        <span>AWESOME SERIES</span>
        <div className='bg-white px-2 rounded-xl'>
        <AiFillCaretUp className="text-xl" /> 
        </div>
       
      </div>
    </div>
  );
};

export default BannerComponent;
