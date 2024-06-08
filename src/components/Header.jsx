import React from "react";
import logo from "../assets/svg/logo.svg";

export const Header = () => {
  return (
    <header className="bg-[#525AA0] max-w-[95rem] mt-8  mx-auto text-white text-sm rounded-xl py-2">
      <div className="container  flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-lg font-bold">
          <img src={logo} alt="zwilt logo" />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8">
          <a href="#" className="hover:underline">
            Find Work
          </a>
          <a href="#" className="hover:underline">
            Find Talent
          </a>
          <a href="#" className="hover:underline">
            Articles
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className=" py-2 px-4 rounded hover:bg-gray-200">
            Log In
          </button>
          <button className="bg-white text-[#525AA0] py-2 px-4 rounded-xl hover:bg-gray-200">
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
};
