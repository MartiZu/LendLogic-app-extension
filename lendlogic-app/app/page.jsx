import Image from "next/image";
import { cookies } from "next/headers";
import { CookieButton } from "./cookies/CookieButton";

export default async function Home() {
  async function setCookieJenny() {
    "use server";
    const userId = "jenny.smith@example.com";
    cookies().set("user_id", userId);
    console.log("Jenny logged in successfully!");
  }
  async function setCookieKat() {
    "use server";
    const userId = "kat.johnson@example.com";
    cookies().set("user_id", userId);
    console.log("Kat logged in successfully!");
  }
  return (
    <main>
      <div className="mt-32 flex flex-col items-center">
        <CookieButton setCookie={setCookieJenny} user={"Jenny"} className="cursor-pointer"/>
        <CookieButton setCookie={setCookieKat} user={"Kat"} className="cursor-pointer"/>

        <Image data-testid="test-logo"

          loading="eager"
          className=""
          src={"/Logo_lendlogic.png"}
          width={300}
          height={500}
          alt="LandLogic Logo"
          priority={true}
        />
      </div>
    </main>
  );
}
