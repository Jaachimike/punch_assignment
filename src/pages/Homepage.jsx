import React from "react";
import {Hero} from "../components/Hero";
import {Divider} from "../components/Divider";
import {Marketplace} from "../components/Marketplace";

export const Homepage = () => {
  return (
    <div className="">
      <Hero />
      <Divider />
      <Marketplace />
    </div>
  );
};
