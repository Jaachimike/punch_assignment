import React from "react";
import zwiltWhite from "../assets/svg/marketplace/zwiltWhite.svg";
import logo from "../assets/svg/logo.svg";

export const Footer = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-b from-[#0C0C0C] to-[#202229]">
        <div className="max-w-[95rem] mx-auto pt-8 pb-20 z-20">
          {/* action banner */}
          <div className="bg-[#525AA0] text-white -skew-y-2 mx-10 2xl:mx-0 mb-20 lg:mb-40">
            <div className="skew-y-2 py-16 md:py-24 flex flex-col items-center">
              <p className=" text-2xl md:text-4xl text-center mb-8">
                Need a job done, and done <br /> well? Get started
              </p>
              {/* action button */}
              <div className="flex items-center space-x-2">
                <div className="bg-[#202229] h-fit px-4 py-5 rounded-2xl">
                  <img src={zwiltWhite} alt="" className="h-3 rotate-90" />
                </div>
              </div>
            </div>
          </div>
          {/* footer bar */}
          <div className="flex flex-col lg:flex-row lg:space-x-16 mb-12 mx-0 md:mx-10 2xl:mx-0">
            {/* column 1 */}
            <div className="md:w-4/12 2xl:w-3/12 mt-3 mb-16 lg:mb-0 ml-8 md:ml-0">
              <div className="mb-7">
                <img src={logo} alt="" />
              </div>
              <p className="text-gray-400 mb-14">
                We take complex hiring processes - and <br /> simplify them.
                Connecting you to the world’s <br /> highly qualified talent
                pool.
              </p>
              <p className="text-gray-600 mb-6">LINKS AND REDIRECTS</p>
              <div className="flex space-x-3 text-gray-300">
                <button className="bg-[#292B34] px-12 py-3 rounded-2xl">
                  Hire now
                </button>
                <button className="bg-[#292B34] px-12 py-3 rounded-2xl">
                  Apply now
                </button>
              </div>
            </div>
            {/* column 2 */}
            <div className="flex flex-col lg:w-8/12">
              <p className="text-white text-4xl md:text-5xl 2xl:text-6xl mb-10 xl:mb-24 2xl:mb-20 text-center md:text-left">
                Connecting the right people to <br /> the right businesses.
              </p>
              <div className="ml-9 md:ml-0 grid grid-cols-2 md:grid-cols-4 ">
                {/* platform col  */}
                <div className="mb-16 md:mb-0">
                  <h2 className="text-gray-600 text-sm mb-4">PLATFORM</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>Find Work</p>
                    <p>Find Talent</p>
                    <p>Categories</p>
                    <p>About Us</p>
                  </div>
                </div>
                {/* categories col  */}
                <div>
                  <h2 className="text-gray-600 text-sm mb-4">CATEGORIES</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>Data Science</p>
                    <p>IT & Networking</p>
                    <p>Web & Mobile</p>
                  </div>
                </div>
                {/* help col  */}
                <div>
                  <h2 className="text-gray-600 text-sm mb-4">HELP</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>FAQ's</p>
                    <p>Contact Us</p>
                  </div>
                </div>
                {/* get in touch col  */}
                <div>
                  <h2 className="text-gray-600 text-sm mb-4">GET IN TOUCH @</h2>
                  <div className="space-y-4 text-gray-400">
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                    <p>Twitter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-0 -top-8 left-0 w-full h-16 bg-[#0C0C0C] to-transparent transform -skew-y-2"></div>
        {/* sub footer */}
        <div className="relative px-4 xl:px-8 2xl:px-0 text-xs md:text-md">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[rgba(255,255,255,0.3)] to-[rgba(32,34,41,0.37)]"></div>
          <div className="max-w-[95rem] mx-auto py-3">
            <div className="flex justify-between">
              <p className="text-gray-300">All rights reserved by Zwilt</p>
              <div className="flex space-x-6 text-gray-500">
                <p className="underline cursor-pointer hover:no-underline">
                  Privacy Policy
                </p>
                <p className="underline cursor-pointer hover:no-underline">
                  Terms and Conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
