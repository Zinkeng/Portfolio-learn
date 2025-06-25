import React from "react";

const SubHeroSection = () => {
  return (
    <div className="flex border-y border-lightGrey text-lightGrey justify-around uppercase xl:text-4xl lg:text-4xl md:text-2xl sm:text-4xl items-center bg-brown gap-4 py-8 w-full">
      <p className="lg:block md:block sm:hidden">Fast Leaner</p>
      <p className="lg:block md:block sm:hidden">Team Work</p>
      <p>Details Master</p>
    </div>
  );
};

export default SubHeroSection;
