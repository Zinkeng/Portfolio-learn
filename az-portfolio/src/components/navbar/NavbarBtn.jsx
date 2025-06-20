import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border-2 flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-orange-500 hover:border-orange hover:scale-110 transform transition-all duration-500 hover:shadow-cyanShadow">
      Hire Me
      <dir className="sm:hidden md:block">
        <LuArrowDownRight />
      </dir>
    </button>
  );
};

export default NavbarBtn;
