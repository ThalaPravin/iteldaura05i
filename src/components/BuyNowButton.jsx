import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BuyNowButton = () => {
  return (
    <button
      className="bg-black text-white px-7 py-3 rounded-md flex items-center justify-center gap-2 text-lg font-bold"
    >
      <span>Buy Now</span>

      <FaArrowRight style={{ color: '#FF0037' }} /> 
    </button>
  );
};

export default BuyNowButton;
