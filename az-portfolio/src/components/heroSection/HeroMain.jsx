import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGradient from "./HeroGradient";
import SubHeroSection from "./SubHeroSection";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
      <div className="lg:flex mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
        <HeroGradient />
      </div>
    </div>
  );
};

export default HeroMain;
