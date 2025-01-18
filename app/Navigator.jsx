import React from "react";
import Link from "next/link";
import Zapper from "./utils/Zapper";
const navItemStyles = "hover:underline transition duration-200";
function Navigator() {
  return (
    <nav className="w-full absolute z-50 text-lg md:text-xl lg:text-2xl p-4">
      <ul className="w-full flex justify-center items-center gap-12 md:gap-14 lg:gap-16 text-white ">
        <Zapper>
          <li className={navItemStyles}>
            <Link href="/about">About</Link>
          </li>
        </Zapper>

        <Zapper>
          <li className={navItemStyles}>
            <Link href="/projects">Projects</Link>
          </li>
        </Zapper>

        <Zapper>
          <li className={navItemStyles}>
            <Link href="/contact">Contact</Link>
          </li>
        </Zapper>
      </ul>
    </nav>
  );
}

export default Navigator;
