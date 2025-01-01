import { useState } from 'react'
import { ImMenu } from 'react-icons/im';

const App = () => {

   
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   
   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

  return (
    <div>
    <div className='md:hidden'>
      {/* Header for smaller screens */}
      <header className='  block lg:hidden md:hidden w-full shadow-xl z-50  '>
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
          <nav className=" w-1/2 h-full bg-blue-950 text-white z-50">

          
          <ul className="flex flex-col items-center">
          
          <li onClick={() => setIsMenuOpen(false)}
          className="py-3 text-2xl hover:text-red-600">Home
      
    </li>
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
      <header className=' header fixed top-0 left-0 hidden md:block lg:block p-4 z-50
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

  
    </div>
  
       
  
  )
}

export default App
