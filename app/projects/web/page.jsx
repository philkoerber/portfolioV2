import React from "react";
import Zapper from "@/app/utils/Zapper";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const projects = [
  {
    title: "Soulscript.Cards",
    subtitle: "AI-powered, monetized Tarot App",
    description:
      "A daily tarot app featuring animated card draws and AI-generated meanings. Built for fast static delivery and optimized for sharing on social media.",
    stack: ["Next.js", "Supabase", "OpenAI", "framer-motion"],
    video: "https://www.youtube.com/embed/sqepFgfLGuw?si=Cez8QpK_7ZX0kI9n",
    url: "https://soulscript.cards",
    github: "https://github.com/philkoerber/tarot",
  },
  {
    title: "sswwiimm-Randomizer",
    subtitle: "Create a totally glitched Pokémon Red ROM and play it in the browser",
    description:
      "Standard Pokémon randomizers were too tame—so I made my own. Every Pokémon is replaced with Missingno. Once generated, the ROM can be played instantly in an embedded GameBoy emulator.",
    stack: ["Next.js", "Reverse Engineering", "Web Assembly"],
    video: "https://www.youtube.com/embed/O2nD17hzeQA?si=61NhcPxVSOCEBVJA",
    url: "https://sswwiimm-randomizer.vercel.app/",
    github: "https://github.com/philkoerber/sswwiimm-randomizer",
  },
  {
    title: "Sixty Six",
    subtitle: "Classic German card game in a cozy web app",
    description:
      "One of my earliest web projects. Play 'Sechsundsechzig,' the traditional German card game, against a computer opponent in a minimal, satisfying interface.",
    stack: ["React", "framer-motion"],
    url: "https://sixty-six.netlify.app/",
    github: "https://github.com/philkoerber/sixtysix",
  },
  {
    title: "Chess Opening Name Explorer",
    subtitle: "Discover over 12,000 chess openings by name",
    description:
      "Ever heard of the 'Fried Liver Attack'? Explore thousands of chess openings and their quirky names in this searchable, animated React app.",
    stack: ["React", "framer-motion"],
    url: "https://openingnameexplorer.netlify.app"
  },
  {
    title: "BellmanBot",
    subtitle: "Realtime AI Trading Bot Runner",
    description:
      "A full-stack system for running deep learning–based trading bots. Users launch jobs from a Next.js frontend, which are processed by a Flask + Celery backend. Real-time status updates are streamed via Socket.IO. Models use TensorFlow and run in isolated Docker containers for stability and repeatability. Designed for experimentation with live telemetry and minimal friction.",
    stack: ["Python", "TensorFlow", "Next.js", "Docker",],
    github: "https://github.com/philkoerber/bellmanbot",
  },
  {
    title: "Portfolio",
    subtitle: "Interactive 3D portfolio with force-graph background",
    description:
      "My personal portfolio built with Next.js, featuring a dynamic 3D background and showcasing my work, resume, and contact links.",
    stack: ["Next.js", "force-graph-3d", "Tailwind"],
    video: "https://www.youtube.com/embed/Z6vNTiXib1A?si=zN6eAeU5daPnOf4X",
    url: "https://philippkoerber.com/",
    github: "https://github.com/philkoerber/portfolioV2",
  },
];

function Web() {
  return (
    <div className="flex justify-center p-8">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-7xl space-y-6">
        {projects.map((project, i) => (
          <Zapper key={i}>
            <div className="bg-antique/10 backdrop-blur-sm p-6 border border-antique/30 break-inside-avoid">
              <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
              <h3 className="text-sm font-semibold mb-2">{project.subtitle}</h3>
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
              {project.video && (
                <div className="aspect-video w-full overflow-hidden border border-antique/20 mb-4">
                  <iframe
                    className="w-full h-full"
                    src={project.video}
                    title={project.title}
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-verydark text-white text-sm font-semibold px-4 py-2 hover:bg-verydark/50 transition duration-200 shadow-md w-full flex items-center justify-center gap-2"
                  >
                    <FaGithub className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-center bg-antique text-verydark text-sm font-semibold px-4 py-2 hover:bg-antique/80 transition duration-200 shadow-md w-full"
                  >
                    Visit {project.title}
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </Zapper>
        ))}
      </div>
    </div>
  );
}

export default Web;
