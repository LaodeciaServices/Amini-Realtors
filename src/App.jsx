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
import Search from "./Components/listing/Search";
import Listing from "./Components/listing/Listing";
import CreateListing from "./Components/listing/CreateListing";
import PrivateRoute from "./Components/PrivateRoute";
import UpdateListing from "./Components/listing/UpdateListing";
import NotLoggedIn from "./Components/NotLoggedIn";

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
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/market-place" element={<MarketPlace />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/not-logged-in" element={<NotLoggedIn />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        {/* new routes for listings */}
        <Route path="/search" element={<Search />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        {/* <Route path="/create-listing" element={<CreateListing />} /> */}
        {/* routes not implemented yet */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          />
          {/* <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          /> */}
        </Route>
      </Routes>
      <Home />
    </BrowserRouter>
  );
};

export default App;
