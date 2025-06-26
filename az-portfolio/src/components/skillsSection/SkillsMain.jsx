import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";

function SkillsMain() {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[400px] relative overflow-hidden">
        <SkillsText />
      </div>

      <div className="absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
        <AllSkills />
      </div>

      <div className="sm:block lg:hidden md:block">
        <AllSkillsSM />
      </div>
    </div>
  );
}

export default SkillsMain;
