import React from "react";
import journey1 from "../assets/png/journey/journey1.png";
import no1 from "../assets/png/journey/1.png";
import zwiltWhite from "../assets/svg/marketplace/zwiltWhite.svg";

const Journey = () => {
  return (
    <div>
      <div className="max-w-[95rem] mx-auto mb-28">
        <p className="font-bold text-5xl text-center mb-16">
          Start your journey today.
        </p>
        {/* Journey 1 */}
        <div className="-skew-y-2 bg-[#EDEFFF] px-5 h-[21rem] overflow-hidden">
          <div className="skew-y-2 flex justify-between items-center">
            {/* write up */}
            <div className="flex space-x-5">
              <div>
                <img src={no1} alt="" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-5">
                  Find your next star <br /> performer.
                </h2>
                <p className=" text-gray-600 mb-5">
                  Explore the vast Zwilt marketplace to find the candidate{" "}
                  <br /> that meets your needs.
                </p>
                {/* action button  */}
                <div className=" flex items-center space-x-2 ">
                  <div className="bg-[#202229] h-fit px-4 py-5 rounded-2xl">
                    <img src={zwiltWhite} alt="" className="h-3" />
                  </div>
                  <p>Join Now</p>
                </div>
              </div>
            </div>
            {/* image */}
            <div>
              <img src={journey1} alt="" className="-mt-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
