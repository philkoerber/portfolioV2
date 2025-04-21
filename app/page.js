import Zapper from "./utils/Zapper";
import Link from "next/link";
import { FaHandPointer } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center text-4xl p-24">
      <Zapper>
        <Link href={"/about"} className="">
          <div className="relative">
            <img src="./pk.svg" className="invert sepia opacity-95" />
            <FaHandPointer
              className="right-0 bottom-0 absolute w-[6vw] h-[6vw] text-antique animate-pulse"
              style={{
                animationDuration: "0.9s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
              }}
            />          </div>
        </Link>
      </Zapper>
    </main>
  );
}
