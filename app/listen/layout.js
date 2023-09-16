import React from "react";
import Link from "next/link";
import Zapper from "../utils/Zapper";
const navItemStyles = "hover:underline transition duration-200";

function layout({ children }) {
  return (
    <div>
      <ul className="w-full flex justify-center gap-8 mt-12 text-lg">
        <Zapper>
          <li className={navItemStyles}>
            <Link href="/listen/releases">Releases</Link>
          </li>
        </Zapper>
        <Zapper>
          <li className={navItemStyles}>
            <Link href="/listen/soundtracks">Soundtracks</Link>
          </li>
        </Zapper>

        <Zapper>
          <li className={navItemStyles}>
            <Link href="/listen/sets">Sets</Link>
          </li>
        </Zapper>
      </ul>
      <div className="py-5">{children}</div>
    </div>
  );
}

export default layout;
