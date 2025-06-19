import React from "react";
import Zapper from "../utils/Zapper";

const philippInfo = [
  { title: "Name", info: "Philipp Koerber" },
  { title: "Job", info: "Web Developer" },
  {
    title: "Background",
    info: "Trained as an organ builder, lived in Japan, now a dedicated developer.",
  },
  {
    title: "Work",
    info: "Full-time on a web dashboard for car retailers; also design custom websites as a side hustle.",
  },
  {
    title: "Freetime",
    info: "Building apps, developing AI trading bots, streaming all kind of stuff on twitch.",
  },
];

function About(props) {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col gap-2 md:gap-4 text-center items-center w-[550px]">
        {philippInfo.map((info, index) => {
          return (
            <Zapper key={info + index}>
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
