import React from 'react';

const DisplayComponent2 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100 m-5">
      <div className="relative max-w-100 rounded-lg overflow-hidden shadow-lg">
        
        <img 
          src="./assets/Displaycomponent2.png" 
          alt="Phone with charging lightning" 
          className="w-full object-cover rounded-lg"
        />
      
        <div className="absolute top-0 left-0 p-14 text-black mt-14 mx-10">
          <h2 className="text-6xl font-semibold mb-4">Quick Boost: 10W </h2>
           <h2 className="text-6xl font-semibold mb-4">Type-C Fast Charging </h2>
           <h2 className="text-6xl font-semibold mb-4" >Support</h2>
          <ul className="text-lg mt-14">
            <li className="mb-2"><span className="font-semibold mt-5 text-3xl">4000 mAh</span> <br /> Battery</li>
            <hr className="w-1/2 my-8 mx-0 border-t-2 " style={{ borderColor: '#949494' }} />

            <li className="mb-2"><span className="font-semibold mt-5 text-3xl">32 Days*</span> <br /> Standby Time</li>

            <hr className="w-1/2 my-8 mx-0 border-t-2" style={{ borderColor: '#949494' }} />
            <li><span className="font-semibold mt-5 text-3xl">7.5 Hours*</span> <br /> Talktime</li>
          </ul>
          <hr className="w-1/2 my-8 mx-0 border-t-2 " style={{ borderColor: '#949494' }} />
          <p className="text-sm mt-4">*5W charger available inside the box</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayComponent2;
