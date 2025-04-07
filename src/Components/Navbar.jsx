import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { toast } from "react-toastify";
import { supabase } from "../supabaseClient"; // Ensure you import supabase properly

function Navbar() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      localStorage.removeItem("user");
      localStorage.removeItem("session");
      toast.success("Logout successful!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    // Retrieve user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div>
      {/* Header for smaller screens */}
      <header className="fixed top-0 w-full block lg:hidden bg-white z-50">
        <div className="flex flex-row items-center justify-between px-6 py-4">
          <h1 className="font-raleway font-extrabold text-xl text-gray-600">
            Amini <span className="text-emerald-400">Realtors</span>
          </h1>
          <ImMenu
            className="block text-emerald-800 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Conditionally render the menu on small screens */}
        {isMenuOpen && (
          <nav className="fixed top-0 left-0 w-3/4 h-full bg-green-600 border rounded-lg text-white z-50 p-6">
            <ul className="flex flex-col items-center space-y-4 text-2xl">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <li className="hover:text-red-600">Home</li>
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                <li className="hover:text-red-600">About us</li>
              </Link>
              <Link to="/market-place" onClick={() => setIsMenuOpen(false)}>
                <li className="hover:text-red-600">Market Place</li>
              </Link>
              {user ? (
                <>
                  <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                    <li className="hover:text-red-600 capitalize">
                      {user?.user_metadata?.firstName || "User"}
                    </li>
                  </Link>
                  <button onClick={handleLogout} className="text-red-500">
                    <li className="hover:text-red-600">Log Out</li>
                  </button>
                </>
              ) : (
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <li className="hover:text-red-600">Sign In</li>
                </Link>
              )}
            </ul>
          </nav>
        )}
      </header>

      {/* Header for larger screens */}
      <header className="hidden md:block fixed top-0 left-0 w-full bg-white p-4 z-50">
        <div className="flex justify-around items-center text-2xl">
          <h1 className="font-raleway font-extrabold text-3xl text-gray-600">
            Amini <span className="text-emerald-400">Realtors</span>
          </h1>
          <ul className="flex space-x-6">
            <Link to="/">
              <li className="px-3 text-xl font-bold border-b-4 border-transparent hover:border-emerald-400">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="px-3 text-xl font-bold border-b-4 border-transparent hover:border-emerald-400">
                About us
              </li>
            </Link>
            <Link to="/market-place">
              <li className="px-3 text-xl font-bold border-b-4 border-transparent hover:border-emerald-400">
                Market Place
              </li>
            </Link>
            {user ? (
              <>
                <Link to="/create-listing">
                  <li className="px-3 text-xl font-bold border-b-4 border-transparent hover:border-emerald-400 ">
                    create-listing
                  </li>
                </Link>
                <Link to="/profile">
                  <li className="px-3 text-xl font-bold border-b-4 border-transparent hover:border-emerald-400 capitalize">
                    {user?.user_metadata?.firstName || "User"}
                  </li>
                </Link>

                <button onClick={handleLogout} className="text-red-500">
                  <li className="px-3 text-xl font-bold border-b-4 border-transparent hover:border-red-400">
                    Log Out
                  </li>
                </button>
              </>
            ) : (
              <Link to="/login">
                <li className="px-3 text-xl font-bold border-b-4 border-transparent hover:border-emerald-400">
                  Sign In
                </li>
              </Link>
            )}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
