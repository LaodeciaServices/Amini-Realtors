import { useState } from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'; 




import { ImMenu } from 'react-icons/im';
import Hero from './Components/Hero';
import Login from './Components/Login';
import React from 'react';
import { FaShopify } from 'react-icons/fa';
import { GiNextButton } from 'react-icons/gi';
import { GrMoney } from 'react-icons/gr';
import { MdAddHomeWork } from 'react-icons/md';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service';

const App = () => {

   
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

   const [isMenuOpen, setIsMenuOpen] = useState(false);

   
   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

  return (
    <BrowserRouter>
    <div className='md:hidden'>
      {/* Header for smaller screens */}
      <header className=' fixed top-0 w-full block lg:hidden md:hidden  bg-white z-50  mb-15'>
        <div className='flex flex-row items-center justify-around text-2xl '>
          <h1 className='font-raleway font-extrabold text-xl mt-4 mb-4 text-black'>Amini <span className='text-emerald-400'>Realtors</span></h1>
        
          <ImMenu
            className='block lg:hidden md:hidden text-emerald-800 mt-2 mb-4 cursor-pointer'
            onClick={toggleMenu} 
          />
        </div>
        {/* Conditionally render the menu on small screens */}
        {isMenuOpen && (
          <nav className="top-0 left-0 fixed w-3/4 h-3/4 bg-green-600 border rounded-lg text-white z-50">

          
          <ul className="flex flex-col items-center">
          <Link to="/">
  <li onClick={() => setIsMenuOpen(false)} className="py-3 text-2xl hover:text-red-600">
    Home
  </li>
</Link>

     <Link to='/about'>
    <li onClick={() => setIsMenuOpen(false)} 
    className="py-3 text-2xl hover:text-red-600">
      About us
    </li>
    </Link>

    
    

    <Link to='/login'>
    <li onClick={() => setIsMenuOpen(false)} 
    className="py-3 text-2xl hover:text-red-600">
       Sign In
    </li>
    </Link>

</ul>

          
          </nav>
        )}
      </header>
      </div>
      {/* Header for larger screens */}
      <header className=' header fixed top-0 left-0 hidden md:block lg:block p-4 z-50 mb-15
font-sans  w-full bg-white'> 
  <div className='flex justify-around items-center text-2xl mt-4 '>
    <h1 className='font-raleway font-extrabold text-3xl mb-4 text-black'>Amini <span className='text-emerald-400'>Realtors</span></h1>
    <ul className="flex mb-4">
      <Link to='/'>
    <li className="inline-block px-3 text-xl font-bold border-b-4 border-transparent hover:border-emerald-400">
        Home
      </li>
      </Link>
      <Link to='/about'>
      <li className="inline-block px-3 text-xl font-bold border-b-4 border-transparent hover:border-emerald-400">
        About us
      </li>
      </Link>
      <Link to='login'>
      <li className="inline-block capitalize px-3 text-xl font-bold border-b-4 border-transparent hover:border-emerald-400" >
        Sign In
      </li>
      </Link>
     
    </ul>
  </div>
</header>

<Routes>
<Route path='/' element={<Hero/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/services' element={<Contact/>}/>
  </Routes>
   {/* Our Services Section */}
<div className="relative overflow-hidden mt-9 mx-auto w-3/4">
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?')`,
      backgroundAttachment: 'fixed',
    }}
  ></div>
  <div className="relative z-10  bg-opacity-90 p-8 rounded-lg">
    <h1 className="font-extrabold text-3xl mb-6 text-white">Our Services</h1>
    <p className="mb-7 text-white ">
      We provide comprehensive services designed to turn<br />
      your dream of homeownership into reality.
    </p>
    <div className="md:flex flex-row gap-4">
      {/* Buy */}
      <div className="flex flex-col items-center mb-4 gap-2">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white">Buy</h2>
        <GrMoney className="text-7xl font-bold text-emerald-500" />
        <p className="text-white">
          Find your perfect property and make confident investment<br />
          decisions with our trusted buying services
        </p>
        <div className="flex flex-row items-center gap-2">
          <h1 className="text-emerald-400 font-bold italic underline">See More</h1>
          <GiNextButton className="text-2xl text-green-200" />
        </div>
      </div>
      {/* Rent */}
      <div className="flex flex-col items-center gap-2 mb-4">
        <h2 className="text-2xl md:text-4xl text-white font-extrabold">Rent</h2>
        <MdAddHomeWork className="text-7xl font-bold text-emerald-500" />
        <p className="text-gray-50">
          Discover flexible and affordable rental options tailored <br />
          to fit your lifestyle and budget
        </p>
        <div className="flex flex-row items-center gap-2">
          <h1 className="text-emerald-400 font-bold italic underline">See More</h1>
          <GiNextButton className="text-2xl text-green-200" />
        </div>
      </div>
      {/* Sell */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl md:text-4xl text-white font-extrabold">Sell</h2>
        <FaShopify className="text-7xl font-bold text-emerald-500" />
        <p className="text-gray-50">
          Sell your property with confidence, leveraging our expertise<br />
          to get the best value in the market
        </p>
        <div className="flex flex-row items-center gap-2">
          <h1 className="text-emerald-400 font-bold italic underline">See More</h1>
          <GiNextButton className="text-2xl text-green-200" />
        </div>
      </div>
    </div>
  </div>
</div>

{/* Cards Section */}
<div className="relative overflow-hidden py-12 bg-gray-100  mt-10">
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?')`,
      backgroundAttachment: 'fixed',
    }}
  ></div>
  <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg">
    <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
      Why Amini Properties is the Real Deal
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative bg-white p-6 shadow-lg rounded-lg border border-gray-200"
        >
          {/* Pin design */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full shadow-lg">
            <div className="w-3 h-3 bg-white rounded-full m-auto mt-1.5"></div>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            {card.title}
          </h3>
          <p className="text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

<footer className="relative overflow-hidden">
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center"
    style=
    {{
      backgroundImage: `url('https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?')`,
      backgroundAttachment: 'fixed',
    }}
  ></div>
  <div className="relative z-10 mt-20 w-3/4 mx-auto md:flex flex-col items-center justify-center text-center p-8
   bg-black bg-opacity-50 rounded-lg">
    <h1 className="text-2xl md:text-5xl font-roboto font-bold mb-5 md:mt-12 text-white">
      Amini Realtors
    </h1>
    <div className="md:w-1/2">
      <h2 className="capitalize text-green-400 font-light text-xl  mt-5 mb-4">
      Your home for beautiful spaces, elegant designs, and inspired living. 
      </h2>
      <p className="text-white font-extralight text-md mb-7">
      At Amini Properties, we transform your real estate dreams into reality with trusted expertise, 
      personalized service, and a passion for excellence.
       Your perfect home, investment, or rental is just the beginning—experience the difference with us.
      </p>
    </div>
    <div className="mt-12 flex flex-col md:flex-row justify-between w-full text-white">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Follow Us</h3>
        <div className="flex gap-4">
          <a href="#" className="text-2xl hover:text-emerald-400">
            <FaFacebookSquare />
          </a>
          <a href="#" className="text-2xl hover:text-emerald-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl hover:text-emerald-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
  





  
    </BrowserRouter>
  
       
  
  );
}

export default App;
