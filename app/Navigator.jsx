"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Zapper from "./utils/Zapper";

const navItemStyles = "hover:underline transition duration-200 text-antique";

function Navigator() {
  const pathname = usePathname();
  const isInProjects = pathname.startsWith("/projects");

  return (
    <nav className="w-full absolute top-0 z-50 flex flex-col items-center p-4 space-y-4 text-lg md:text-xl lg:text-2xl">
      {/* Main Nav */}
      <ul className="flex justify-center gap-12 md:gap-14 lg:gap-16 text-antique">
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

      {/* Subnav appears below if inside /projects */}
      {isInProjects && (
        <ul className="flex justify-center gap-8 text-antique text-base md:text-lg">
          <Zapper>
            <li className={navItemStyles}>
              <Link href="/projects/web">Web Apps</Link>
            </li>
          </Zapper>
          <Zapper>
            <li className={navItemStyles}>
              <Link href="/projects/trading">Trading</Link>
            </li>
          </Zapper>
        </ul>
      )}
    </nav>
  );
}

export default Navigator;
