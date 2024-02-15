"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import JennyPersona from "../components/JennyPersona";
import KatPersona from "../components/KatPersona";

export function CookieButton({ setCookie, user }) {
  const [JennyMessage, setJennyMessage] = useState(false);
  const [KatMessage, setKatMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const setAndPush = () => {
    setCookie();
    if (user === "Jenny") {
      setJennyMessage(true);
    }
    if (user === "Kat") {
      setKatMessage(true);
    }
  };

  const handleNext = () => {
    router.push("/questionnaire");
  };

  return (
    <section>
      {JennyMessage || KatMessage ? (
        <>
          {JennyMessage ? <JennyPersona handleNext={handleNext} /> : null}
          {KatMessage ? <KatPersona handleNext={handleNext} /> : null}
        </>
      ) : (
        <div>
          {errorMessage && <p>{errorMessage}</p>}
          <button
            className="mx-4 my-6 min-w-button-width w-26 bg-off-white rounded-3xl text-purple-accent p-3 shadow-card text-center text-2xl hover:bg-purple-accent hover:text-off-white hover:font-semibold"
            data-testid="test-cookie"
            type="button"
            onClick={setAndPush}
          >
            {user}'s journey
          </button>
        </div>
      )}
    </section>
  );
}
