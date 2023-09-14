import Navigator from "./Navigator";
import "./globals.css";
import dynamic from "next/dynamic";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Graph = dynamic(() => import("./Graph"), {
  ssr: false,
});

export const metadata = {
  title: "DZA",
  description: "MAEHHA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.className}>
        <div className="">
          <Navigator />
        </div>

        <div className="h-screen w-screen">
          <div className="fixed w-screen h-screen z-0">
            <Graph />
          </div>
          <div className="absolute z-100 text-white w-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
