import React from "react";
import {Accordion} from "./Accordion";

export const ScreeningProcess = () => {
  return (
    <div className="text-black mt-44 mb-52">
      <div className="max-w-[95rem] mx-auto ">
        <h2 className="text-5xl font-bold mb-6">
          How we ensure you’re <br /> in good hands.
        </h2>
        <p className="text-xl text-gray-600 mb-7">
          With our comprehensive screening process, we hand-pick highly <br />{" "}
          skilled candidates so you can onboard them in a matter of days.
        </p>

        <Accordion />
      </div>
    </div>
  );
};
