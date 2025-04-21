import Navigator from "./Navigator";
import "./globals.css";
import dynamic from "next/dynamic";

import { Space_Mono } from "next/font/google";

const space = Space_Mono({ subsets: ["latin"], weight: "400" });

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
      <body className={space.className}>
        <div className="">
          <Navigator />
        </div>

        <div className="h-[100dvh] w-[100dvw]">
          <div className="fixed w-[100dvw] h-[100dvh] z-0">
            <Graph />
          </div>
          <div className="absolute z-100 text-verydark w-[100dvw]">{children}</div>
        </div>
      </body>
    </html>
  );
}
