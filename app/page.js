import Zapper from "./utils/Zapper";
import Link from "next/link";
import { FaHandPointer } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-center text-4xl p-24">
      <Zapper>
        <Link href={"/about"} className="">
          <div className="relative">
            <img src="./pk.svg" className="invert" />
            <FaHandPointer className="right-0 bottom-0 absolute w-[90px] h-[90px]" />
          </div>
        </Link>
      </Zapper>
    </main>
  );
}
