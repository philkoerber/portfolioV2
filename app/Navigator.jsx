import React from "react";
import Link from "next/link";
import Zapper from "./utils/Zapper";
const navItemStyles = "hover:underline transition duration-200";
function Navigator() {
  return (
    <nav className="w-full absolute z-50 text-lg p-4">
      <ul className="w-full flex justify-center items-center gap-8 text-white ">
        <Zapper>
          <li className={navItemStyles}>
            <Link href="/about">About</Link>
          </li>
        </Zapper>

        <Zapper>
          <li className={navItemStyles}>
            <Link href="/listen">Listen</Link>
          </li>
        </Zapper>

        <Zapper>
          <li className={navItemStyles}>
            <Link href="/equipment">Equipment</Link>
          </li>
        </Zapper>

        <Zapper>
          <li className={navItemStyles}>
            <Link href="/socials">Socials</Link>
          </li>
        </Zapper>
      </ul>
    </nav>
  );
}

export default Navigator;
