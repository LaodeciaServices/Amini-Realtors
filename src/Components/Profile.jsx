import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserListings from "./listing/UserListings";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      // Redirect to login page if no user
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return null; // Prevent rendering if user is being redirected
  }

  return (
    <>
      <div className="flex items-center justify-center p-4 flex-col  mt-10 md:pt-20">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-semibold text-green-700">
            Your Profile
          </h2>
          <div className="mt-6">
            <div className="mb-4">
              <p className="text-gray-500 text-sm">Email</p>
              <p className="text-lg font-medium text-gray-800">
                {user.user_metadata.email}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">First Name</p>
              <p className="text-lg font-medium text-gray-800">
                {user.user_metadata.firstName}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">Last Name</p>
              <p className="text-lg font-medium text-gray-800">
                {user.user_metadata.lastName}
              </p>
            </div>
          </div>
          <button
            className="mt-6 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
      {/* <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center"> */}
      <UserListings />
      {/* </div> */}
    </>
  );
}

export default Profile;
