import Link from "next/link";
import React from "react";

function Discography(props) {
  return (
    <div className="flex">
      <Link href={"/discography/releases"}>Physical Releases</Link>
      <Link href={"/discography/digital"}>Digital</Link>
      <Link href={"/discography/sets"}>Sets</Link>
    </div>
  );
}

export default Discography;
