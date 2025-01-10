import React from 'react';
import { Link } from 'react-router-dom';
import { GrMoney } from "react-icons/gr";
import { GiNextButton } from "react-icons/gi";
import { MdAddHomeWork } from "react-icons/md";
import { FaShopify } from "react-icons/fa";

const Hero = () => {
 
  return (
    <div className="mt-10 md:pt-20 ">
      {/* Hero Section */}
      <div className="flex flex-col ">
        {/* Left Section */}
        <div className="">
          <h1 className="text-4xl font-bold text-green-600 mb-4 mx-auto w-3/4 mt-5">Find Your Dream Home</h1>
          <p className="text-gray-600 leading-relaxed mx-auto w-3/4 mb-6">
            Whether you're a Kenyan citizen living abroad or locally, Amini Properties is here to help you secure your dream home or commercial property.
            <br />
            <br />
            We connect realtors and buyers for a seamless, stress-free experience, ensuring peace of mind every step of the way.
            <br />
            <br />
            Let us be the bridge to your property goals.
          </p>
         
        </div>

        {/* Right Section */}
        <div className="">
          <img
            className="w-full h-auto md:h-1/3 shadow-lg mt-7"
            src="https://images.pexels.com/photos/7578931/pexels-photo-7578931.jpeg?"
            alt="Real estate"
          />
        </div>
      </div>
     
        <div className="flex justify-center">
  <Link to='/login'>
   <button
    className="px-6 py-3 mt-7 mb-7 flex items-center bg-blue-500 text-white rounded-lg shadow-lg
    hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out"
  >
    Get Started
  </button>
  </Link>
</div>


      </div>
    
    
  );
};

export default Hero;
