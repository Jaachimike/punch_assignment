import React from "react";
import journey1 from "../assets/png/journey/journey1.png";
import no1 from "../assets/png/journey/1.png";
import journey2 from "../assets/png/journey/journey2.png";
import no2 from "../assets/png/journey/2.png";
import journey3 from "../assets/png/journey/journey3.png";
import no3 from "../assets/png/journey/3.png";
import zwiltWhite from "../assets/svg/marketplace/zwiltWhite.svg";

const Journey = () => {
  return (
    <div>
      <div className="max-w-[95rem] mx-8 md:mx-auto md:mb-28">
        <p className="font-bold text-4xl md:text-5xl text-center mb-16">
          Start your journey today.
        </p>
        {/* Journey 1 */}
        <div className="-skew-y-2 bg-[#EDEFFF] pt-8 md:pt-0 px-5 h-[21rem] overflow-hidden mb-7">
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
            <div className="hidden md:block">
              <img src={journey1} alt="" className="-mt-10" />
            </div>
          </div>
        </div>
        {/* Journey 2 */}
        <div className="-skew-y-2 bg-[#FFF7E1] pt-12 md:pt-0 px-5 h-[21rem] overflow-hidden mb-7">
          <div className="skew-y-2 flex justify-between items-center">
            {/* write up */}
            <div className="flex space-x-5">
              <div>
                <img src={no2} alt="" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-5">
                  Evaluate to your <br /> heart’s content.
                </h2>
                <p className=" text-gray-600 mb-5">
                  Assess the candidate through work history, transparent <br />{" "}
                  tests and video interviews.
                </p>
                {/* action button  */}
                <div className=" flex items-center space-x-2 ">
                  <div className="bg-[#202229] h-fit px-4 py-5 rounded-2xl">
                    <img src={zwiltWhite} alt="" className="h-3" />
                  </div>
                  <p>Browse More</p>
                </div>
              </div>
            </div>
            {/* image */}
            <div className="hidden md:block">
              <img src={journey2} alt="" className="-mt-10" />
            </div>
          </div>
        </div>
        {/* Journey 3 */}
        <div className="-skew-y-2 bg-[#F3F3F3] pt-12 md:pt-0 px-5 h-[21rem] overflow-hidden">
          <div className="skew-y-2 flex justify-between items-center">
            {/* write up */}
            <div className="flex space-x-5">
              <div>
                <img src={no3} alt="" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-5">
                  Start building <br /> your team.
                </h2>
                <p className=" text-gray-600 mb-5">
                  Onboard your candidate right away and start <br /> creating
                  the next big thing.
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
            <div className="hidden md:block">
              <img src={journey3} alt="" className="-mt-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
