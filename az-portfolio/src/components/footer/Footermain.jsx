import React from "react";

const Links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const Footermain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-lightGrey">Ajongafac Zinkeng Mbetem</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {Links.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-white transform transition-all duration-500 cursor-pointer"
                >
                  {item.link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        @ 2025 Ajongafac | All Rights Reserved
      </p>
    </div>
  );
};

export default Footermain;
