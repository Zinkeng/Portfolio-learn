import React from "react";
import ExperienceTopRight from "./ExperienceTopRight";
import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExpirienceTopMiddle";

function ExperienceTop() {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center">
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  );
}

export default ExperienceTop;
