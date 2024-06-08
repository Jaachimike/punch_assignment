import React from "react";
import hoverIcon from "../assets/svg/zwiltYellow.svg";

export const FAQ = () => {
  return (
    <div className="pb-36 pt-20 -skew-y-2 bg-[#f3f3f3]">
      <div className="skew-y-2">
        <h2 className="text-center font-bold text-5xl mb-20">
          Frequently asked questions
        </h2>
        {/* questions */}
        {/* 1 */}
        <div className="border-y flex">
          <div className="flex-none text-black px-20 py-8 border-r">
            <p>General</p>
          </div>
          <div className="flex-1 justify-center hover:bg-[#E8E8E8] text-gray-400 hover:text-black relative group">
            <p className="py-8 text-center ">
              I want to work part time, is that possible?
            </p>
            <span className="absolute right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
              <img src={hoverIcon} alt="icon" className="w-6 h-6" />
            </span>
          </div>
        </div>
        {/* 2 */}
        <div className="hover:bg-[#E8E8E8] text-gray-400 hover:text-black border-y py-8 relative group">
          <p className=" text-center ml-48">
            How long are the average projects?
          </p>
          <span className="absolute right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
            <img src={hoverIcon} alt="icon" className="w-6 h-6" />
          </span>
        </div>
        {/* 3 */}
        <div className="hover:bg-[#E8E8E8] text-gray-400 hover:text-black border-y py-8 relative group">
          <p className="text-center ml-40">How does the payment works?</p>
          <span className="absolute right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
            <img src={hoverIcon} alt="icon" className="w-6 h-6" />
          </span>
        </div>
        {/* 4 */}
        <div className="hover:bg-[#E8E8E8] text-gray-400 hover:text-black border-y py-8 relative group">
          <p className="text-center  ml-24">How much can i earn?</p>
          <span className="absolute right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
            <img src={hoverIcon} alt="icon" className="w-6 h-6" />
          </span>
        </div>
        {/* 5 */}
        <div className=" border-y flex ">
          <div className="flex-none text-black px-20 py-8 border-r">
            <p>General</p>
          </div>
          <div className="flex-none text-black px-16 py-8 border-r">
            <p>Joining Process</p>
          </div>
          <div className="flex-1 justify-center hover:bg-[#E8E8E8] text-gray-400 hover:text-black relative group">
            <p className="py-8 ml-80 ">
              I want to work part time, is that possible?
            </p>
            <span className="absolute right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
              <img src={hoverIcon} alt="icon" className="w-6 h-6" />
            </span>
          </div>
        </div>
        {/* 6 */}
        <div className="border-y py-8 hover:bg-[#E8E8E8] text-gray-400 hover:text-black relative group">
          <p className="text-center ml-44">
            How long are the average projects?
          </p>
          <span className="absolute right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
            <img src={hoverIcon} alt="icon" className="w-6 h-6" />
          </span>
        </div>
        {/* 7 */}
        <div className="border-y py-8 hover:bg-[#E8E8E8] text-gray-400 hover:text-black relative group">
          <p className="text-center ml-44">
            How long are the average projects?
          </p>
          <span className="absolute right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
            <img src={hoverIcon} alt="icon" className="w-6 h-6" />
          </span>
        </div>
        {/* 8 */}
        <div className="border-y py-8 hover:bg-[#E8E8E8] text-gray-400 hover:text-black relative group  ">
          <p className="text-center ml-20">How much can I earn?</p>
          <span className="absolute right-20 top-1/2 transform -translate-y-1/2 hidden group-hover:block">
            <img src={hoverIcon} alt="icon" className="w-6 h-6" />
          </span>
        </div>
      </div>
    </div>
  );
};
