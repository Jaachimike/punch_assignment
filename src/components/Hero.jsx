import React from "react";
import heroImage from "../assets/png/zwilt-tba-1-01 2.png";
import zwiltIcon from "../assets/svg/zwiltIcon.svg";
const itAndDevelopment = [
  "Python Developer",
  "Data Scientist",
  "Shopify Developer",
  "Shopify Developer",
  "Front End Developer",
  "Python Developer",
  "MERN Stack Developer",
  "Shopify Developer",
  "Full Stack Developer",
  "Full Stack Developer",
  "Python Developer",
  "Explore More",
];

export const Hero = () => {
  return (
    <div className="h-[85vh] mt-28 md:mt-0 mb-20 md:mb-0 max-w-[95rem] mx-8 md:mx-auto">
      <div className="flex flex-col justify-center items-center h-full">
        <div className=" ">
          {/* writeup */}
          <div className="flex flex-col">
            <p className=" text-5xl md:text-6xl mb-4 text-center font-bold">
              Finding the right fit{" "}
              <span className="align-middle inline-flex">
                <img src={heroImage} alt="" className="h-9 mb-2 align-middle" />
              </span>{" "}
              has <br /> never been easier.
            </p>
            <p className=" text-gray-500 text-center md:text-lg font-light">
              With our rigorous pre-vetting process, you'll never have to{" "}
              <br className="hidden md:block" /> worry about finding the ideal
              candidate ever again.
            </p>
            <div className="flex justify-center">
              <div className="group w-96 md:w-96 lg:w-11/12  mx-auto lg:mx-0  px-6 py-4 flex items-center  text-black">
                <div className="relative flex items-center w-full ">
                  <input
                    id="8"
                    type="email"
                    placeholder="Looking for design"
                    className="peer relative h-16 w-full rounded-xl text-sm pl-3 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
                  />
                  <button className="absolute flex items-center justify-center right-0 h-16 w-16 rounded-r-xl rounded-l-xl bg-[#FFBE2E] text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-[#FFBE2E] group-focus-within:hover:bg-[#FFBE2E]">
                    <img src={zwiltIcon} alt="Search Icon" className="h-4 " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tab table */}
        <div className="mx-10">
          <div className="bg-[#F8F8F8] md:px-20 rounded-xl mb-20 md:mb-0 pb-10">
            {/* tabs */}
            <div className="text-gray-600 flex justify-center ">
              <div className=" font-bold bg-gray-100 flex md:flex-none text-nowrap rounded-2xl mt-4 mb-8 ">
                <button className="px-7 py-3 rounded-2xl  bg-[#C7F4C2]">
                  IT & Development
                </button>
                <button className="px-7">Design and Creative</button>
              </div>
            </div>
            {/* list  */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 md:gap-x-48 gap-y-4 gap-x-4 ">
                {itAndDevelopment.map((item, index) => (
                  <div
                    key={index}
                    className={`${
                      item === "MERN Stack Developer" || item === "Explore More"
                        ? "text-black"
                        : "text-gray-400"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
