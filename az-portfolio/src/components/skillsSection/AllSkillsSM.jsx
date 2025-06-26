import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaDocker } from "react-icons/fa";

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

function AllSkillsSM() {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllSkillsSM;
