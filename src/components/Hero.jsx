import React from 'react';
import AwesomeSeriesLabel from './AwesomeSeriesLabel';
import BuyNowButton from './BuyNowButton';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center m-0 justify-between bg-white p-8 md:p-16 bg-[url('/assets/bannermobile.webp')] bg-cover bg-center bg-no-repeat">
      
      <div className=" md:w-1/2 text-center md:text-left mb-8 md:mb-0 mx-14">
      
        <AwesomeSeriesLabel/>
        <h1 className="text-5xl md:text-9xl font-bold text-gray-900 mt-4">
          Aura 05i
        </h1>
        <p className="text-xl text-gray-600 mt-1 ">
          6.6" HD+ WATERDROP DISPLAY | 4000 mAh BATTERY WITH 
          <br />TYPE-C CHARGING | 32GB ROM
        </p>
        <br />
        <p className="text-2xl text-gray-900 mt-6 mb-4">
          Available at 
          <b> ₹4,799/- </b>
        </p>

        <BuyNowButton />
      </div>

      
      <div className="md:w-1/2 flex justify-center">
        <img
          src="./assets/aura5i.png" 
          alt="Aura 05i"
          className="w-2/3 md:w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
