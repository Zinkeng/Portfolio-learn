import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Vacations of Africa",
    year: "March 2022",
    align: "right",
    Image: "../../public/images/website-img-1.jpg",
    link: "#",
  },

  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
  },

  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
  },

  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div>
      <ProjectText />

      <div>
        {projects.map((item, index) => {
          return <SingleProject key={index} name={item.name} />;
        })}
        <SingleProject />
      </div>
    </div>
  );
};

export default ProjectsMain;
