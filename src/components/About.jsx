import React from 'react';
import BuyNowButton from './BuyNowButton'; 

const About = () => {
  return (
    <section className="bg-white  px-6 lg:px-24  ">
      
      <hr />
      <div className="flex justify-between items-center mb-4 mt-4">
        
      
        <div className="flex items-center">
          <img src="./assets/monkeyface.png" alt="Aura 05i Logo" className="h-12 w-12 mr-3" />
          <h2 className="text-2xl font-bold">Aura 05i</h2>
        </div>
        
    
        <div className="flex items-center space-x-8">
          <a href="#overview" className="text-gray-600 hover:text-[#FF0037] font-semibold">Overview</a>
          <a href="#tech-specs" className="text-gray-600 hover:text-[#FF0037] font-semibold">Tech Specs</a>
          
        </div>

        <div>
        <BuyNowButton /> 
        </div>

        
      </div>

      <hr />

     
      <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-12 mb-12 mt-14">
        
        <div className="lg:w-1/2">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#FF0037]">
            Elevate Your Everyday Experience with 32GB ROM
          </h1>
        </div>
        
        
        <div className="lg:w-1/2">
          <p className="text-gray-700 text-base md:text-lg">
            Presenting itel Aura 05i with 6.6-inch HD+ display, a 4000 mAh battery, 10W Type-C fast charging support, and 32GB ROM. Snap pics with its 5 MP dual rear camera and 5 MP front camera. Running on Android 13, it has fingerprint and Face unlock for extra security.
          </p>
        </div>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img src="./assets/feature1.png" alt="Display Icon" className="h-20 w-20" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">6.6" HD+ Waterdrop Display</h3>
          <p className="text-gray-600 mt-2">
            Enjoy edge-to-edge screen that offers vibrant colors and crisp details, perfect for streaming, gaming, and browsing.
          </p>
        </div>

      
        <div className="text-center">
          <div className="flex justify-center mb-4">
          <img src="./assets/feature2.png" alt="Display Icon" className="h-20 w-20" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Stay Powered All Day: 4000 mAh Battery & Type-C Charging
          </h3>
          <p className="text-gray-600 mt-2">
            Use your itel Aura 05i for long hours with 4000 mAh battery and Type-C fast charging for quick recharge.
          </p>
        </div>

        
        <div className="text-center">
          <div className="flex justify-center mb-4">
          <img src="./assets/feature3.png" alt="Display Icon" className="h-20 w-20" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Peak Awesomeness with 4GB* (2GB + 2GB*) RAM & 32GB ROM
          </h3>
          <p className="text-gray-600 mt-2 mb-14">
            Get high performance with 4GB* (2GB + 2GB*) RAM for efficient multitasking and 32GB of storage for your apps and media.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
