import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import SubSkills from "./SubSkills";

function SkillsMain() {
  return (
    <div
      id="skills relative"
      style={{
        paddingBottom: 240,
      }}
    >
      <div className="max-w-[1200px] px-4 mx-auto min-h-[100px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView="show"
          s
          viewport={{ once: false, amount: 0 }}
          className="h-full flex items-center justify-center"
        >
          <SkillsText />
        </motion.div>
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
