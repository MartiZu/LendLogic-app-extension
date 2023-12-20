"use client";
import { useRouter } from "next/navigation";

export function CookieButton({ setCookie, user }) {
  const router = useRouter();
  const setAndPush = () => {
    setCookie();
    router.push("/questionnaire");
  };

  return (
    <section className="mx-4 my-6 min-w-button-width w-26 bg-off-white rounded-3xl text-purple-accent p-3 shadow-card text-center text-2xl hover:bg-purple-accent hover:text-off-white hover:font-semibold">
      <button type="button" onClick={setAndPush}>
        {user}'s journey
      </button>
    </section>
  );
}
