import React from "react";
import commaBg from "../assets/png/testimonialBg.png";
import testimonialTextImg from "../assets/png/testimonialTextImage.png";
import grooveText from "../assets/png/groovehq.png";
import zwiltDirectionalButton from "../assets/svg/zwiltPurple.svg";
import grooveLogo from "../assets/png/grooveLogo.png";

export const Testimonial = () => {
  return (
    <div className="bg-[#202229] relative -skew-y-2">
      <img src={commaBg} alt="Top Right" className="absolute top-0 right-7" />
      <div className="skew-y-2 py-20 md:py-48 max-w-[95rem] md:mx-8 mx-auto">
        <div className="grid md:grid-cols-2">
          {/* title */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-5xl mb-7 text-white font-bold">
              How it worked <br /> for Jason
              <span className="align-middle mx-3 inline-flex">
                <img
                  src={testimonialTextImg}
                  alt=""
                  className="h-9 mb-2 rounded-full align-middle"
                />
              </span>
              at <br />
              <span className="align-middle inline-flex">
                <img src={grooveText} alt="" className=" h-10 align-middle" />
              </span>
            </h2>
            <p className="text-gray-400 mb-10">
              Zwilt enabled us to deliver on time and they’ve <br /> been heavy
              hitters in our corner since.
            </p>
            {/* direction buttons */}
            <div className=" flex self-start space-x-3 ml-10 md:ml-0 ">
              <div className="bg-white w-fit px-5 py-5 rounded-2xl">
                <img src={zwiltDirectionalButton} alt="" />
              </div>
              <div className="bg-white w-fit px-5 py-5 rounded-2xl">
                <img
                  src={zwiltDirectionalButton}
                  alt=""
                  className="transform rotate-180"
                />
              </div>
            </div>
          </div>
          {/* testimonial */}
          <div className="flex flex-col items-center md:items-start md:mt-0 mt-16">
            {/* title and profile picture */}
            <div className="flex items-center space-x-3 mb-7 self-start ml-10 md:ml-0">
              {/* profile picture */}
              <div>
                <img src={grooveLogo} alt="groove logo" />
              </div>
              <div>
                <h2 className="text-3xl text-white">Jason Makki</h2>
                <p className="text-sm text-gray-600">Engineer at GROOVE</p>
                <p className="text-sm text-gray-600">San Francisco</p>
              </div>
            </div>
            {/* testimonial comment */}
            <div>
              <p className="text-gray-400 text-md">
                Zwilt enabled us to deliver on time and they’ve <br /> been
                heavy hitters in our corner since. Zwilt <br /> enabled us to
                deliver on time and they’ve been <br /> heavy hitters in our
                corner since.Zwilt enabled us <br /> to deliver on time and
                they’ve been heavy hitters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
