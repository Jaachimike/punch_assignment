import React from "react";
import {Hero} from "../components/Hero";
import {Divider} from "../components/Divider";
import {Marketplace} from "../components/Marketplace";
import {Testimonial} from "../components/Testimonial";
import {ScreeningProcess} from "../components/ScreeningProcess";
import Journey from "../components/Journey";

export const Homepage = () => {
  return (
    <div className="">
      <Hero />
      <Divider />
      <Marketplace />
      <Testimonial />
      <ScreeningProcess />
      <Journey />
    </div>
  );
};
