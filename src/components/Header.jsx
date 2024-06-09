import React, {useState} from "react";
import logo from "../assets/svg/logo.svg";
import hamburgerIcon from "../assets/svg/hamburgerIcon.svg";
import closeIcon from "../assets/svg/closeIcon.svg";

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="bg-[#525AA0] max-w-[95rem] mt-8 mb-20 md:mb-0 mx-4 lg:mx-auto text-white text-sm rounded-xl py-2">
        <div className="flex justify-between items-center px-6">
          {/* Logo */}
          <div className="text-lg font-bold">
            <img src={logo} alt="zwilt logo" className="h-8 w-auto" />
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden" onClick={toggleSidebar}>
            <img src={hamburgerIcon} alt="" className="h-7" />
          </div>

          {/* Navigation Links (Hidden on mobile) */}
          <nav className="hidden lg:flex space-x-8">
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

          {/* Buttons (Hidden on mobile) */}
          <div className="hidden lg:flex space-x-4">
            <button className="py-2 px-4 rounded hover:bg-gray-200">
              Log In
            </button>
            <button className="bg-white text-[#525AA0] py-2 px-4 rounded-xl hover:bg-gray-200">
              Join Now
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="absolute top-4 right-4" onClick={toggleSidebar}>
          <img src={closeIcon} alt="" className="h-7" />
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-white text-lg">
          <a href="#" className="hover:underline" onClick={toggleSidebar}>
            Find Work
          </a>
          <a href="#" className="hover:underline" onClick={toggleSidebar}>
            Find Talent
          </a>
          <a href="#" className="hover:underline" onClick={toggleSidebar}>
            Articles
          </a>
          <a href="#" className="hover:underline" onClick={toggleSidebar}>
            About Us
          </a>
          <a href="#" className="hover:underline" onClick={toggleSidebar}>
            Contact Us
          </a>
          <button
            className="py-2 px-4 rounded bg-gray-700 hover:bg-gray-600"
            onClick={toggleSidebar}
          >
            Log In
          </button>
          <button
            className="bg-white text-[#525AA0] py-2 px-4 rounded-xl hover:bg-gray-200"
            onClick={toggleSidebar}
          >
            Join Now
          </button>
        </div>
      </div>
    </>
  );
};
