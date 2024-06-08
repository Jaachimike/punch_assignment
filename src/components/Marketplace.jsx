import React from "react";
import skillsIcon from "../assets/svg/skills.svg";
import profilesIcon from "../assets/svg/profiles.svg";
import subCategoriesIcon from "../assets/svg/subCategories.svg";

import shopify from "../assets/svg/marketplace/shopify.svg";
import magento from "../assets/svg/marketplace/magento.svg";
import data from "../assets/svg/marketplace/data.svg";
import webflow from "../assets/svg/marketplace/webflow.svg";
import dotnet from "../assets/svg/marketplace/dotnet.svg";
import zwilt from "../assets/svg/marketplace/zwilt.svg";
import zwiltWhite from "../assets/svg/marketplace/zwiltWhite.svg";
import figma from "../assets/svg/marketplace/figma.svg";
import photoShop from "../assets/svg/marketplace/photoshop.svg";
import illustrator from "../assets/svg/marketplace/illustrator.svg";
import unreal from "../assets/svg/marketplace/unreal.svg";
import cinema from "../assets/svg/marketplace/cinema.svg";

const itAndDevelopment = [
  {
    desc1: "Shopify",
    desc2: "Developer",
    logo: shopify,
  },
  {
    desc1: "Magento",
    desc2: "Developer",
    logo: magento,
  },
  {
    desc1: "Data",
    desc2: "Scientist",
    logo: data,
  },
  {
    name: "Webflow Developer",
    desc1: "Webflow",
    desc2: "Developer",
    logo: webflow,
  },
  {
    name: "Dotnet Developer",
    logo: dotnet,
    desc1: "Dotnet",
    desc2: "Developer",
  },
  {
    name: "",
    logo: zwilt,
  },
];

const designAndCreative = [
  {
    name: "",
    logo: zwilt,
  },
  {
    desc1: "UX",
    desc2: "Designer",
    logo: figma,
  },
  {
    desc1: "Graphics",
    desc2: "Designer",
    logo: photoShop,
  },
  {
    desc1: "Illustration",
    desc2: "Artist",
    logo: illustrator,
  },
  {
    desc1: "Unreal",
    desc2: "Engine",
    logo: unreal,
  },
  {
    logo: cinema,
    desc1: "Cinema",
    desc2: "4D",
  },
];

export const Marketplace = () => {
  return (
    <div className="bg-[#EDEFFF] -skew-y-2">
      <div className="skew-y-2 pt-48 pb-24 max-w-[95rem] mx-auto">
        {/* title */}
        <div>
          <p className="text-5xl font-bold text-center mb-16">
            Your one-stop marketplace for finding <br /> the talent your
            business needs.
          </p>
        </div>
        {/* writeup */}
        <div className="flex flex-col justify-center">
          {/* IT and Development */}
          <div className="flex justify-around space-x-52 mb-10 ">
            <div className="">
              <p className="text-xl mt-4 mb-6">
                Find Dev and IT professionals to <br /> scale your business.
              </p>
              <div className="grid grid-cols-2 text-sm text-gray-400">
                {/* skills */}
                <div className="flex space-x-3 items-center">
                  <img src={skillsIcon} alt="" />
                  <p>989 Skills</p>
                </div>
                {/* sub categories */}
                <div className="flex space-x-3 items-center">
                  <img src={subCategoriesIcon} alt="" />
                  <p>45 Sub-Categories</p>
                </div>
                {/* profiles */}
                <div className="flex space-x-3 items-center">
                  <img src={profilesIcon} alt="" />
                  <p>1011 Profiles</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg">
              <p className="mb-6">IT & Development</p>
              <div className=" flex space-x-7">
                {itAndDevelopment.map((item, index) => (
                  <div key={index} className=" text-center text-sm">
                    <div
                      className={`bg-[#F6F6F6] ${
                        item.name === "" ? "rounded-3xl" : "rounded-full"
                      }  p-8 mb-2`}
                    >
                      <img src={item.logo} alt="" className="h-8 w-8" />
                    </div>
                    <p>{item.desc1}</p>
                    <p>{item.desc2}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Design and Creative */}
          <div className="flex justify-around space-x-52 mb-5">
            <div className="">
              <p className="text-xl mt-4 mb-6">
                Explore Creative individuals with a <br /> keen eye for detail.
              </p>
              <div className="grid grid-cols-2 text-sm text-gray-400">
                {/* skills */}
                <div className="flex space-x-3 items-center">
                  <img src={skillsIcon} alt="" />
                  <p>989 Skills</p>
                </div>
                {/* sub categories */}
                <div className="flex space-x-3 items-center">
                  <img src={subCategoriesIcon} alt="" />
                  <p>45 Sub-Categories</p>
                </div>
                {/* profiles */}
                <div className="flex space-x-3 items-center">
                  <img src={profilesIcon} alt="" />
                  <p>1011 Profiles</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg">
              <p className="mb-6">Design & Creative</p>
              <div className=" flex space-x-7">
                {designAndCreative.map((item, index) => (
                  <div className=" text-center text-sm">
                    <div
                      className={`bg-[#F6F6F6] ${
                        item.name === "" ? "rounded-3xl" : "rounded-full"
                      } ${
                        item.name === "" ? "transform rotate-180" : ""
                      }   p-8 mb-2`}
                    >
                      <img src={item.logo} alt="" className="h-8 w-8" />
                    </div>
                    <p>{item.desc1}</p>
                    <p>{item.desc2}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* explore more */}
          <div className="flex items-center space-x-96 ml-16 ">
            <div className=" flex items-center space-x-2 ">
              <div className="bg-[#202229] h-fit px-4 py-5 rounded-2xl">
                <img src={zwiltWhite} alt="" className="h-3" />
              </div>
              <p>Explore More</p>
            </div>
            <div className="pl-24">
              <p>
                30 more <span className="text-gray-400">to explore</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
