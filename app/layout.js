import Navigator from "./Navigator";
import "./globals.css";
import { Inter } from "next/font/google";
import Graph from "./Graph";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DZA",
  description: "MAEHHA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Navigator />
        </div>

        <div className="h-screen w-screen">
          <div className="absolute w-screen h-screen z-0">
            <Graph />
          </div>
          <div className="z-100 text-white"> {children}</div>
        </div>
      </body>
    </html>
  );
}
