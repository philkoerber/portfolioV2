import Zapper from "./utils/Zapper";
import Link from "next/link";
import { FaHandPointer } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center text-4xl p-24">
      <Zapper>
        <Link href="/about" className="relative group">
          <div className="relative w-[60vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="./pk.svg"
              alt="Logo"
              className="w-full h-auto invert sepia opacity-95"
            />
            <FaHandPointer
              className="absolute right-0 bottom-0 w-[10vw] max-w-[60px] text-antique animate-pulse group-hover:scale-110 transition-transform"
              style={{
                animationDuration: "0.9s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
              }}
            />
          </div>
        </Link>
      </Zapper>
    </main>
  );
}
