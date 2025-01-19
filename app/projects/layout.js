import React from "react";
import Link from "next/link";
import Zapper from "../utils/Zapper";
const navItemStyles = "hover:underline transition duration-200";

function layout({ children }) {
  return (
    <div className="relative">
      <ul className="w-full flex justify-center mt-12 text-lg gap-12 md:gap-14 lg:gap-16 absolute z-50">
        <Zapper>
          <li className={navItemStyles}>
            <Link href="/projects/development">Coding & Apps</Link>
          </li>
        </Zapper>
        <Zapper>
          <li className={navItemStyles}>
            <Link href="/projects/music">Music & Instruments</Link>
          </li>
        </Zapper>
      </ul>
      <div className="h-[100dvh] w-[100dvw] flex justify-center items-center sticky top-0">
        {children}
      </div>
    </div>
  );
}

export default layout;
