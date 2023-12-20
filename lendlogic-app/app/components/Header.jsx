// import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../public/Icon.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <main>
      <header className="flex flex-row justify-between px-5 py-3 items-center">
        <div className="flex flex-row justify-center items-center">
          <Link href="/">
            <Image
              src="/Logo_lendlogic.png"
              width={100}
              height={100}
              alt="LandLogic Logo"
              priority={true}
              className="rounded-2xl"
            />
          </Link>
        </div>
        
        <div className="flex flex-col items-center text-purple-accent font-semibold text-xl">
          <h1>LendLogic</h1>
        </div>
      </header>
      <div className="bg-purple-accent h-2"></div>
    </main>
  );
}
