import React from "react";
import Zapper from "../utils/Zapper";
import Link from "next/link";
import { FaCode, FaGuitar } from "react-icons/fa";

const Projects = () => {
  const navItems = [
    {
      title: "Coding & Apps",
      link: "/projects/development",
      icon: <FaCode />,
    },
    {
      title: "Music & Instruments",
      link: "/projects/music",
      icon: <FaGuitar />,
    },
  ];

  return (
    <div className="h-[100dvh] flex justify-center items-center flex-col gap-8">
      {navItems.map((item, index) => (
        <Zapper key={item.title + index}>
          <div className="flex gap-4 justify-center items-center">
            <div className="text-4xl">{item.icon}</div>
            <Link
              href={item.link}
              className="text-white hover:underline text-lg"
            >
              {item.title}
            </Link>
          </div>
        </Zapper>
      ))}
    </div>
  );
};

export default Projects;
