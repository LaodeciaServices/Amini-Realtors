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
        
        <div className="">
          <h1 className="text-3xl font-bold text-gray-600  mx-auto w-3/4 mb-5 mt-5">
          Your Kenyan Home Awaits-<br/><br/>Karibu</h1>
          <p className="text-gray-600 leading-relaxed mx-auto w-3/4 mb-6">
          <span className='text-emerald-400 font-bold'>Amini Usiamini</span> – Believe it or not! For the first time, we’ve risen to the occasion to
   create a platform that makes owning or developing property in Kenya simple, 
   seamless, and stress-free for our diaspora family.<br/><br/> No more relying on friends 
   or family as trustees. With Amini Property Managers and Developers, professionals
    are ready to handle your real estate needs—whether it’s buying land, building your 
    dream home, or managing your property—anywhere in the country. Your property journey starts now!
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
        <Link to='/about'>
        <div className='text-center mt-7' >
          <button className='bg-green-400 hover:bg-green-600 rounded-lg shadow-lg
           p-5 text-white capitalize font-bold'>Learn about us</button>
        </div>
        </Link>

      </div>
    
    
  );
};

export default Hero;
