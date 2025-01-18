import Zapper from "./utils/Zapper";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-center text-4xl p-24">
      <Zapper>
        <Link href={"/about"}>
          <img src="./pk.svg" className="invert" />
        </Link>
      </Zapper>
    </main>
  );
}
