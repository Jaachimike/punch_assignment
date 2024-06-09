import React, {useState, useEffect} from "react";
import zwiltWhite from "../assets/svg/marketplace/zwiltWhite.svg";
import bulletPointPurple from "../assets/svg/bulletPointPurple.svg";
import bulletPointYellow from "../assets/svg/bulletPointYellow.svg";
import bulletPointGreen from "../assets/svg/bulletPointGreen.svg";
import feature1Img from "../assets/png/features/feature1.png";
import feature2Img from "../assets/png/features/feature2.png";
import feature3Img from "../assets/png/features/feature3.png";

const Frame1 = () => (
  <div className="w-full h-full bg-white px-4 md:px-8 md:py-4  rounded-lg shadow-lg flex items-center">
    <div className="md:w-6/12">
      <p className="font-bold text-2xl text-nowrap md:text-wrap md:text-4xl mb-7">
        Onboard without <br className="hidden md:block" /> the risk.
      </p>
      <ul className="text-gray-600 text-sm md:text-md mb-8 md:text-nowrap">
        <li className="flex items-center">
          <span>
            <img
              src={bulletPointPurple}
              alt=""
              className="mr-2 md:mr-3 lg:mr-3 w-2 lg:w-fit "
            />
          </span>
          We pick the best for you to select
        </li>
        <li className="flex items-center">
          <span>
            <img
              src={bulletPointPurple}
              alt=""
              className="mr-3 md:mr-3 lg:mr-3 w-2 lg:w-fit"
            />
          </span>
          Thousands of vetted candidates in dozens of categories.
        </li>
        <li className="flex items-center">
          <span>
            <img
              src={bulletPointPurple}
              alt=""
              className="mr-2 md:mr-3 lg:mr-3 w-2 lg:w-fit"
            />
          </span>
          Risk-free resource swapping for the best fit.
        </li>
      </ul>
      {/* action button  */}
      <div className=" flex items-center text-sm md:text-md space-x-2 ">
        <div className="bg-[#202229] h-fit px-3 md:px-4 py-4 md:py-5 rounded-2xl">
          <img src={zwiltWhite} alt="" className="h-3" />
        </div>
        <p>Learn More</p>
      </div>
    </div>
    <div className="hidden lg:block">
      <img src={feature1Img} alt="" className="h-[29rem]" />
    </div>
  </div>
);

const Frame2 = () => (
  <div className="w-full h-full bg-white px-4 md:px-8 md:py-4 rounded-lg shadow-lg flex items-center">
    <div className="md:w-6/12">
      <p className="font-bold text-2xl text-nowrap md:text-wrap md:text-4xl mb-7">
        An open <br className="hidden md:block" /> book.
      </p>
      <ul className="text-gray-600 text-sm md:text-md mb-8 md:text-nowrap">
        <li className="flex items-center">
          <span>
            <img
              src={bulletPointYellow}
              alt=""
              className="mr-3 md:mr-3 lg:mr-3 w-2 lg:w-fit"
            />
          </span>
          Easy and transparent one-to-one chat with candidates.
        </li>
        <li className="flex items-center">
          <span>
            <img
              src={bulletPointYellow}
              alt=""
              className="mr-2 md:mr-3 lg:mr-3 w-2 lg:w-fit"
            />
          </span>
          Simple and convenient payment methods.
        </li>
        <li className="flex items-center">
          <span>
            <img
              src={bulletPointYellow}
              alt=""
              className=" mr-2 md:mr-1 lg:mr-3 w-2 lg:w-fit"
            />
          </span>
          Review past ratings.
        </li>
      </ul>
      {/* action button  */}
      <div className=" flex items-center text-sm md:text-md space-x-2 ">
        <div className="bg-[#202229] h-fit px-3 md:px-4 py-4 md:py-5 rounded-2xl">
          <img src={zwiltWhite} alt="" className="h-3" />
        </div>
        <p>Learn More</p>
      </div>
    </div>
    <div className="hidden lg:block">
      <img src={feature2Img} alt="" className="h-[29rem]" />
    </div>
  </div>
);

const Frame3 = () => (
  <div className="w-full h-full bg-white px-4 md:px-8 md:py-4 rounded-lg shadow-lg flex items-center">
    <div className="lg:w-6/12">
      <p className="font-bold text-2xl text-nowrap md:text-wrap md:text-4xl mb-7">
        Stay in the <br className="hidden md:block" /> loop.
      </p>
      <ul className="text-gray-600 text-sm md:text-md mb-8 lg:text-nowrap">
        <li className="flex items-center">
          <span>
            <img src={bulletPointGreen} alt="" className="mr-3 w-2 lg:w-fit" />
          </span>
          Track your staff activity down to every minute with screenshots.
        </li>
        <li className="flex items-center">
          <span>
            <img src={bulletPointGreen} alt="" className="mr-3 w-2 lg:w-fit" />
          </span>
          Comprehensive timesheet data to process payments.
        </li>
        <li className="flex items-center">
          <span>
            <img src={bulletPointGreen} alt="" className="mr-3 w-2 lg:w-fit" />
          </span>
          Create projects to organize and assign tasks more effectively.
        </li>
      </ul>
      {/* action button  */}
      <div className=" flex items-center text-sm md:text-md space-x-2">
        <div className="bg-[#202229] h-fit px-3 md:px-4 py-4 md:py-5 rounded-2xl">
          <img src={zwiltWhite} alt="" className="h-3" />
        </div>
        <p>Learn More</p>
      </div>
    </div>
    <div className="hidden lg:block">
      <img src={feature3Img} alt="" className="h-[29rem]" />
    </div>
  </div>
);

const frames = [<Frame1 />, <Frame2 />, <Frame3 />];

const Slideshow = () => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, 2000); // Change frame every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {frames.map((frame, index) => (
        <div
          key={index}
          className={`absolute top-0 md:left-10 lg:left-64 w-full h-full transition-opacity duration-1000 ${
            index === currentFrameIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {frame}
        </div>
      ))}
    </div>
  );
};

export const Features = () => {
  return (
    <div className="pb-36 pt-20 -skew-y-2 bg-gradient-to-b from-white to-[#F5F6FF]">
      <div className="skew-y-2 mx-8 md:mx-0 flex flex-col md:flex-row justify-between ">
        {/* left text section */}
        <div className="md:ml-[4rem] max-w-md mt-24 mb-16 md:mb-0">
          <h2 className="font-bold text-4xl mb-7">
            Why choose <br /> Zwilt?
          </h2>
          <p className="text-gray-600">
            We take complex hiring <br /> processes - and simplify them. <br />{" "}
            Connecting you to the world’s <br /> highly qualified talent pool.
          </p>
        </div>

        {/* right frame section */}
        <div className="relative md:w-[70%]  h-[28rem] overflow-hidden ">
          <Slideshow />
        </div>
      </div>
    </div>
  );
};
