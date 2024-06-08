import React from "react";
import skillsIcon from "../assets/svg/skills.svg";
import profilesIcon from "../assets/svg/profiles.svg";
import subCategoriesIcon from "../assets/svg/subCategories.svg";

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
        <div>
          {/* IT and Development */}
          <div>
            <div>
              <p className="text-xl">
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
            <div></div>
          </div>
          {/* Design and Creative */}
          <div></div>
        </div>
      </div>
    </div>
  );
};
