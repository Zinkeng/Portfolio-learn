import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center lg:text-left px-4">
      <h2 className="text-cyan lg:text-2xl sm:text-xl uppercase">
        FRONT-END WEB DEVELOPER
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">
        Ajongafac Zinkeng Mbetem
      </h1>
      <p className="text-lg mt-4 text-white">
        A passionate web developer <br />
        with 2 years of experience
      </p>
    </div>
  );
};

export default HeroText;
