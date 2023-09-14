import React from "react";
import Link from "next/link";
import Zapper from "../utils/Zapper";

function layout({ children }) {
  return (
    <div>
      <div className="w-full flex justify-center gap-8">
        <Zapper>
          <Link href={"/discography/releases"}>Physical Releases</Link>
        </Zapper>
        <Zapper>
          <Link href={"/discography/digital"}>Digital</Link>
        </Zapper>
        <Zapper>
          <Link href={"/discography/sets"}>Sets</Link>
        </Zapper>
      </div>
      {children}
    </div>
  );
}

export default layout;
