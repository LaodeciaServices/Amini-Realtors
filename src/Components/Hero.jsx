import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const cardData = [
    {
      title: "Expert Realtors",
      description: "Our experienced team ensures you find the perfect property tailored to your needs.",
    },
    {
      title: "Seamless Process",
      description: "Enjoy a stress-free journey with our transparent and efficient services.",
    },
    {
      title: "Global Reach",
      description: "Whether local or abroad, we connect buyers with properties across Kenya.",
    },
    {
      title: "Customer-Centric",
      description: "Your satisfaction is our priority, ensuring peace of mind every step of the way.",
    },
  ];

  return (
    <div className="mt-10 md:pt-20 ">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section */}
        <div className="flex-1 p-6">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Find Your Dream Home</h1>
          <p className="text-gray-600 leading-relaxed mb-6">
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
        <div className="flex-1">
          <img
            className="  rounded-lg shadow-lg"
            src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Real estate"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-12 bg-gray-100 mt-10">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Why Amini Properties is the Real Deal
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative bg-white p-6 shadow-lg rounded-lg border border-gray-200"
            >
              {/* Pin design */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full m-auto mt-1.5"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
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
    </div>
  );
};

export default Hero;
