import React from "react";
import Zapper from "@/app/utils/Zapper";

const projects = [
  {
    title: "Soulscript.Cards",
    subtitle: "AI-powered, monetized Tarot App",
    description:
      "A daily tarot app featuring animated card draws and AI-generated meanings. Built for fast static delivery and optimized for sharing on social media.",
    stack: ["Next.js", "Supabase", "OpenAI", "framer-motion"],
    video: "https://www.youtube.com/embed/3jZ5vnv-LZc",
    url: "https://soulscript.cards",
  },
  {
    title: "sswwiimm-Randomizer",
    subtitle: "Create a totally glitched Pokémon Red ROM and play it in the browser",
    description:
      "Standard Pokémon randomizers were too tame—so I made my own. Every Pokémon is replaced with Missingno. Once generated, the ROM can be played instantly in an embedded GameBoy emulator.",
    stack: ["Next.js", "Reverse Engineering", "Web Assembly"],
    video: "https://www.youtube.com/embed/bYb5IS7yWrY",
    url: "https://sswwiimm-randomizer.vercel.app/",
  },
  {
    title: "Sixty Six",
    subtitle: "Classic German card game in a cozy web app",
    description:
      "One of my earliest web projects. Play 'Sechsundsechzig,' the traditional German card game, against a computer opponent in a minimal, satisfying interface.",
    stack: ["React", "framer-motion"],
    url: "https://sixty-six.netlify.app/",
  },
  
  {
    title: "Chess Opening Name Explorer",
    subtitle: "Discover over 12,000 chess openings by name",
    description:
      "Ever heard of the 'Fried Liver Attack'? Explore thousands of chess openings and their quirky names in this searchable, animated React app.",
    stack: ["React", "framer-motion"],
    url: "https://openingnameexplorer.netlify.app/",
  },
  {
    title: "No Tide '93",
    subtitle: "Atmospheric dolphin exploration in Babylon.js",
    description:
      "Procedural worldbuilding and retro 3D aesthetics, all within a Babylon.js environment.",
    stack: ["Next.js", "Babylon.js"],
    url: "https://notide93.vercel.app/",
  },
  {
    title: "Portfolio",
    subtitle: "Interactive 3D portfolio with force-graph background",
    description:
      "My personal portfolio built with Next.js, featuring a dynamic 3D background and showcasing my work, resume, and contact links.",
    stack: ["Next.js", "force-graph-3d", "Tailwind"],
    video: "https://www.youtube.com/embed/_gfKBB2rZzA",
    url: "https://philippkoerber.com/",
  },
  
];




function Web(props) {
  return (
    <div className="flex justify-center p-8">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-7xl space-y-6">
        {projects.map((project, i) => (
          <Zapper key={i}>
            <div className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30 break-inside-avoid">
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
              {project.video && 
              <div className="aspect-video w-full overflow-hidden border border-antique/20">
                <iframe
                  className="w-full h-full"
                  src={project.video}
                  title={project.title}
                  allowFullScreen
                ></iframe>
              </div>}
              
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-antique text-verydark text-sm font-semibold px-4 py-2 hover:bg-antique/80 transition duration-200 shadow-md"
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
