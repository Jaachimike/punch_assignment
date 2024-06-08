import React from "react";
import {Hero} from "../components/Hero";
import {Divider} from "../components/Divider";
import {Marketplace} from "../components/Marketplace";
import {Testimonial} from "../components/Testimonial";
import {ScreeningProcess} from "../components/ScreeningProcess";
import Journey from "../components/Journey";
import {FAQ} from "../components/FAQ";
import {Features} from "../components/Features";

export const Homepage = () => {
  return (
    <div className="">
      <Hero />
      <Divider />
      <Marketplace />
      <Testimonial />
      <ScreeningProcess />
      <Journey />
      <Features />
      <FAQ />
    </div>
  );
};
