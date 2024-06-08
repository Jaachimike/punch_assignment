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

export const Marketplace = () => {
  return (
    <div className="bg-[#EDEFFF] -skew-y-2">
      <div className="skew-y-2 pt-28 max-w-[95rem] mx-auto">
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
          <div className="flex justify-around space-x-32 mb-10 ">
            <div className="">
              <p className="text-xl mt-4 mb-6">
                Find Dev and IT professionals to <br /> scale your business.
              </p>
              <div className="grid grid-cols-2">
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
              <div className=" flex space-x-14">
                {itAndDevelopment.map((item, index) => (
                  <div className=" text-center">
                    <div className=" bg-[#F6F6F6] rounded-full p-8">
                      <img src={item.logo} alt="" className="h-8" />
                    </div>
                    <p>{item.desc1}</p>
                    <p>{item.desc2}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Design and Creative */}
          <div className="flex justify-around space-x-32 ">
            <div className="">
              <p className="text-xl mt-4 mb-6">
                Explore Creative individuals with a <br /> keen eye for detail.
              </p>
              <div className="grid grid-cols-2">
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
              <div className=" flex space-x-14">
                {itAndDevelopment.map((item, index) => (
                  <div className=" text-center">
                    <div className=" bg-[#F6F6F6] rounded-full p-8">
                      <img src={item.logo} alt="" className="h-8" />
                    </div>
                    <p>{item.desc1}</p>
                    <p>{item.desc2}</p>
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
