import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaDocker } from "react-icons/fa";
import SingleSkills from "./SingleSkills";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },

  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },

  {
    skill: "Javascript",
    icon: IoLogoJavascript,
  },

  {
    skill: "React",
    icon: FaReact,
  },

  {
    skill: "NodeJS",
    icon: FaNodeJs,
  },

  {
    skill: "DevOps",
    icon: FaDocker,
  },

  {
    skill: "UI/UX Design",
    icon: FaFigma,
  },

  {
    skill: "Graphic Design",
    icon: MdOutlineDesignServices,
  },
];

function AllSkills() {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="h-full flex items-center justify-center"
            >
              <SingleSkills
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default AllSkills;
