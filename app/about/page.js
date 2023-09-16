import React from "react";
import Zapper from "../utils/Zapper";

const sashaInfo = [
  { title: "Name", info: "Sasha" },
  { title: "Channel", info: "Posts music-making videos" },
  {
    title: "Music Background",
    info: "DJ and producer for experimental music (mostly hip-hop based)",
  },
  { title: "Releases", info: "Available on Bandcamp" },
  { title: "Work", info: "Composer for films, animation, and video games" },
  {
    title: "Clients",
    info: "Netflix, HBO, Adidas, Coca-Cola, Dior, Yves Saint Laurent, Mercedes-Benz, and more",
  },
  {
    title: "Affiliations",
    info: "DZA, ACD, how2make rec., RBMA London (Red Bull Music Academy London), Mumiy Troll, Nana the Shrimp",
  },
];

function About(props) {
  return (
    <div className="h-screen flex justify-center items-center p-8">
      <div className="flex flex-col gap-4 text-center items-center">
        {sashaInfo.map((info) => {
          return (
            <Zapper>
              <p className="text-sm">{info.title}:</p>
              <p className="text-lg">{info.info}</p>
            </Zapper>
          );
        })}
      </div>
    </div>
  );
}

export default About;
