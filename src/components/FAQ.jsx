import React from "react";
import hoverIcon from "../assets/svg/zwiltYellow.svg";

export const FAQ = () => {
  return (
    <div className="pb-36 pt-20 -skew-y-2 bg-[#f3f3f3]">
      <div className="skew-y-2">
        <h2 className="text-center font-bold text-4xl md:text-5xl mb-20">
          Frequently asked questions
        </h2>
        {/* questions */}
        {/* 1 */}
        <div className="border-y flex flex-col md:flex-row">
          <div className="flex-none text-center md:text-left text-black px-20 py-8 border-r border-b md:border-b-none">
            <p>General</p>
          </div>
          <div className="flex-1 justify-center hover:bg-[#E8E8E8] text-gray-400 hover:text-black relative group">
            <p className="py-8 text-center ">
              I want to work part time, is that possible?
            </p>
            <span className="absolute right-5 md:right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
              <img src={hoverIcon} alt="icon" className="w-6 h-6" />
            </span>
          </div>
        </div>
        {/* 2 */}
        <div className="hover:bg-[#E8E8E8] text-gray-400 hover:text-black border-y py-8 relative group">
          <p className=" text-center md:ml-48">
            How long are the average projects?
          </p>
          <span className="absolute right-5 md:right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
            <img src={hoverIcon} alt="icon" className="w-6 h-6" />
          </span>
        </div>
        {/* 3 */}
        <div className="hover:bg-[#E8E8E8] text-gray-400 hover:text-black border-y py-8 relative group">
          <p className="text-center md:ml-40">How does the payment works?</p>
          <span className="absolute right-5 md:right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
            <img src={hoverIcon} alt="icon" className="w-6 h-6" />
          </span>
        </div>
        {/* 4 */}
        <div className="hover:bg-[#E8E8E8] text-gray-400 hover:text-black border-y py-8 relative group">
          <p className="text-center md:ml-24">How much can i earn?</p>
          <span className="absolute right-5 md:right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
            <img src={hoverIcon} alt="icon" className="w-6 h-6" />
          </span>
        </div>
        {/* 5 */}
        <div className="border-y flex flex-col md:flex-row">
          <div className="flex-none flex  border-b md:border-b-none">
            <div className=" w-1/2 md:w-fit text-center md:text-left text-black px-4 md:px-16 lg:px-20 py-8 border-r">
              <p>General</p>
            </div>
            <div className="text-center w-1/2 md:w-fit text-black px-4 md:px-10 lg:px-16 py-8 border-r">
              <p>Joining Process</p>
            </div>
          </div>

          <div className="flex-1 justify-center hover:bg-[#E8E8E8] text-gray-400 hover:text-black relative group">
            <p className="py-8 text-center text-nowrap  md:text-left md:ml-4 xl:ml-52 2xl:ml-80">
              I want to work part time, is that possible?
            </p>
            <span className="absolute right-4 md:right-8 lg:right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
              <img src={hoverIcon} alt="icon" className="w-6 h-6" />
            </span>
          </div>
        </div>
        {/* 6 */}
        <div className="border-y py-8 hover:bg-[#E8E8E8] text-gray-400 hover:text-black relative group">
          <p className="text-center md:ml-44">
            How long are the average projects?
          </p>
          <span className="absolute right-5 md:right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
            <img src={hoverIcon} alt="icon" className="w-6 h-6" />
          </span>
        </div>
        {/* 7 */}
        <div className="border-y py-8 hover:bg-[#E8E8E8] text-gray-400 hover:text-black relative group">
          <p className="text-center md:ml-44">
            How long are the average projects?
          </p>
          <span className="absolute right-5 md:right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
            <img src={hoverIcon} alt="icon" className="w-6 h-6" />
          </span>
        </div>
        {/* 8 */}
        <div className="border-y py-8 hover:bg-[#E8E8E8] text-gray-400 hover:text-black relative group  ">
          <p className="text-center md:ml-20">How much can I earn?</p>
          <span className="absolute right-5 md:right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
            <img src={hoverIcon} alt="icon" className="w-6 h-6" />
          </span>
        </div>
      </div>
    </div>
  );
};
