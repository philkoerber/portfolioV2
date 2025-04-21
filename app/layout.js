import Navigator from "./Navigator";
import "./globals.css";
import dynamic from "next/dynamic";
import { Space_Mono } from "next/font/google";

const space = Space_Mono({ subsets: ["latin"], weight: "400" });

// Dynamically load Graph without SSR (because it uses window, WebGL, etc.)
const Graph = dynamic(() => import("./Graph"), {
  ssr: false,
});

export const metadata = {
  title: "Philipp Koerber",
  description: "Hi, I am Philipp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${space.className} text-verydark`}>
        {/* Graph background layer */}
        <div className="fixed inset-0 -z-10">
          <Graph />
        </div>

        {/* Navigator always on top */}
        <header className="sticky z-50">
          <Navigator />
        </header>

        {/* Main content area */}
        <main className="relative z-10 min-h-[100dvh] w-full px-4 py-24 flex justify-center">
          <div className="w-full max-w-5xl">{children}</div>
        </main>
      </body>
    </html>
  );
}
