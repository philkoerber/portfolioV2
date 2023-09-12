import React from "react";
import Link from "next/link";
const navItemStyles = "hover:text-bold transition duration-200";
function Navigator(props) {
  return (
    <nav className="w-full absolute z-50">
      <ul className="w-full flex justify-center items-center gap-8 text-white ">
        <li className={navItemStyles}>
          <Link href="/about">About</Link>
        </li>
        <li className={navItemStyles}>
          <Link href="/discography">Discography</Link>
        </li>
        <li className={navItemStyles}>
          <Link href="/equipment">Equipment</Link>
        </li>
        <li className={navItemStyles}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigator;
