import React from "react";
import Zapper from "@/app/utils/Zapper";

const projects = [
  {
    title: "Soulscript.Cards",
    subtitle: "AI-powered, monetized Tarot-App",
    description:
      "A daily tarot card app with animated draws and AI-powered card meanings, built for smooth static delivery and social sharing. Monetized with Google AdSense.",
    stack: ["Next.js", "Supabase", "OpenAI", "framer-motion", "Google AdSense"],
    video: "https://www.youtube.com/embed/3jZ5vnv-LZc",
    url: "https://soulscript.cards",
  },
  {
    title: "sswwiimm-Randomizer",
    subtitle: "Create a really weird Pokémon Red ROM and play it in the browser",
    description:
      "The usual Pokémon randomizers weren’t chaotic enough—so I built my own. Every Pokémon is replaced with the infamous Missingno. When a ROM is generated, the app lets you play it instantly via an embedded GameBoy emulator.",
    stack: ["Next.js", "Reverse Engineering", "Web Assembly"],
    video: "https://www.youtube.com/embed/bYb5IS7yWrY",
    url: "https://sswwiimm-randomizer.vercel.app/",
  },
  {
    title: "No Tide '93",
    subtitle: "Satisfying, athmospheric Dolphin-swimming with Babylon.js engine",
    description:
      "My personal portfolio built with React, showcasing my projects, resume, and blog.",
    stack: ["Next.js", "Babylon.js", "OpenAI", "Google AdSense"],
    video: "https://www.youtube.com/embed/_gfKBB2rZzA",
    url: "https://notide93.vercel.app/",
  },
];
function Web(props) {
  return (
    <div className="flex justify-center p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl">
        {projects.map((project, i) => (
          <Zapper>
            <div
              key={i}
              className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30"
            >
              <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
              <h3 className="text-lg font-semibold mb-2">{project.subtitle}</h3>
              <p className="text-sm mb-4 opacity-80">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, j) => (
                  <span
                    key={j}
                    className="bg-antique text-verydark text-xs px-2 py-1 rounded-full"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
              <div className="aspect-video w-full overflow-hidden border border-antique/20">
                <iframe
                  className="w-full h-full"
                  src={project.video}
                  title={project.title}
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 right-0 inline-block bg-antique text-verydark text-sm font-semibold px-4 py-2 hover:bg-antique/80 transition duration-200 shadow-md"
              >
                Visit {project.title} →
              </a>
            </div>
          </Zapper>
        ))}
      </div>
    </div>
  );
}

export default Web
