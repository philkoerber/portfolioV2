import React from "react";
import Zapper from "../utils/Zapper";

const philippInfo = [
  { title: "Name", info: "Philipp Koerber" },
  { title: "Job", info: "Web Developer" },
  {
    title: "Background",
    info: "Trained as an organ builder, traveled extensively in my twenties, now a dedicated developer.",
  },
  {
    title: "Work",
    info: "Full-time on a web dashboard for car retailers; also design custom websites as a side hustle.",
  },
  {
    title: "Freetime",
    info: "Building a Tarot SaaS, developing an AI trading bot, crafting instruments, and making music.",
  },
];

function About(props) {
  return (
    <div className="min-h-[80dvh] flex justify-center items-center p-8 py-20">
      <div className="flex flex-col gap-4 text-center items-center w-[550px]">
        {philippInfo.map((info) => {
          return (
            <Zapper key={info}>
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
