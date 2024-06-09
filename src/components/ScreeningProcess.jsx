import React from "react";
import {Accordion} from "./Accordion";

export const ScreeningProcess = () => {
  return (
    <div className="text-black mt-20 md:mt-32 lg:mt-44 mb-24 md:mb-32 lg:mb-52">
      <div className="max-w-[95rem] mx-10 2xl:mx-auto ">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          How we ensure you’re <br /> in good hands.
        </h2>
        <p className="text-md md:text-xl text-gray-600 mb-7">
          With our comprehensive screening process, we hand-pick highly <br />{" "}
          skilled candidates so you can onboard them in a matter of days.
        </p>
        <Accordion />
      </div>
    </div>
  );
};
