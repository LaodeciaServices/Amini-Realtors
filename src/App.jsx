import { useState } from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

import { ImMenu } from 'react-icons/im';
import Hero from './Components/Hero';
import Login from './Components/Login';

const App = () => {

   
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   
   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

  return (
    <BrowserRouter>
    <div className='md:hidden'>
      {/* Header for smaller screens */}
      <header className='  block lg:hidden md:hidden w-full shadow-xl z-50  mb-15'>
        <div className='flex flex-row items-center justify-around text-2xl bg-white border
         rounded-full shadow-xl'>
          <h1 className=' font-extrabold mt-2 mb-4 text-red-600'>Amini</h1>
          <ImMenu
            className='block lg:hidden md:hidden text-blue-800 mt-2 mb-4 cursor-pointer'
            onClick={toggleMenu} 
          />
        </div>
        {/* Conditionally render the menu on small screens */}
        {isMenuOpen && (
          <nav className="top-0 left-0 fixed w-1/2 h-full bg-blue-700 text-white z-50">

          
          <ul className="flex flex-col items-center">
          <Link to="/">
  <li onClick={() => setIsMenuOpen(false)} className="py-3 text-2xl hover:text-red-600">
    Home
  </li>
</Link>


    <li onClick={() => setIsMenuOpen(false)} 
    className="py-3 text-2xl hover:text-red-600">
      About us
    </li>
    <li onClick={() => setIsMenuOpen(false)} 
    className="py-3 text-2xl hover:text-red-600">
       Services
    </li>
    <li onClick={() => setIsMenuOpen(false)} 
    className="py-3 text-2xl hover:text-red-600">
       Contact us
    </li>

</ul>

          
          </nav>
        )}
      </header>
      </div>
      {/* Header for larger screens */}
      <header className=' header fixed top-0 left-0 hidden md:block lg:block p-4 z-50 mb-15
font-sans border rounded-full w-full bg-white'> 
  <div className='flex justify-around items-center text-2xl mt-4 '>
    <h1 className='font-manrope mb-4 text-red-600'>Amini</h1>
    <ul className="flex mb-4">
      <li className="px-3 hover:text-red-600">
        Home
      </li>
      <li className="px-3 hover:text-red-600">
        About us
      </li>
      <li className="px-3 hover:text-red-600">
        Services
      </li>
      <li className="px-3 hover:text-red-600">
        Contact us
      </li>
    </ul>
  </div>
</header>

<Routes>
<Route path='/' element={<Hero/>}/>
<Route path='/login' element={<Login/>}/>
  </Routes>

  
    </BrowserRouter>
  
       
  
  )
}

export default App
