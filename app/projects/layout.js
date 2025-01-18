import React from "react";
import Link from "next/link";
import Zapper from "../utils/Zapper";
const navItemStyles = "hover:underline transition duration-200";

function layout({ children }) {
  return (
    <div>
      <ul className="w-full flex justify-center mt-12 text-lg gap-12 md:gap-14 lg:gap-16">
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
      <div className="pt-5 pb-20">{children}</div>
    </div>
  );
}

export default layout;
