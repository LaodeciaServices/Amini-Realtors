import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./Components/Hero";
import Login from "./Components/Login";
import About from "./Components/About";
import Contact from "./Components/Contact";
import MarketPlace from "./Components/MarketPlace";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ResetPassword from "./Components/ResetPassword";
import UpdatePassword from "./Components/UpdatePassword";
import { ToastContainer } from "react-toastify";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/market-place" element={<MarketPlace />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
      </Routes>
      <Home />
    </BrowserRouter>
  );
};

export default App;
