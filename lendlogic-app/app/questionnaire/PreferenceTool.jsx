"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Loading from "../components/loading";

export default function PreferenceTool({ cookieHandler }) {
  // set state
  const [questionNumber, setQuestionNumber] = useState(1);

  // hold clicked or unclicked in state, that resets on new carddescribe
  const [cardVisible, setCardVisible] = useState(true);
  // clicked means slideout class is added
  const router = useRouter();

  // handledClick on input
  const handleClick = (e, num, qNum, aNum) => {
    e.preventDefault();
    cookieHandler(qNum, aNum);
    if (num === 99) {
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }
    // update the class names
    setCardVisible(false);
    // set a delay of animation length
    setTimeout(() => {
      setQuestionNumber(num);
      setCardVisible(true);
    }, 200);
    // update state/number when clicking on input and sends to another question based on number set in onClick function.
  };
  return (
    <section>
      {questionNumber === 1 ? (
        <div
          className={
            cardVisible
              ? "flex flex-col min-h-card-height min-max-width mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slidein"
              : "flex flex-col min-h-card-height min-max-width mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slideout"
          }
        >
          <form className="flex flex-col my-5 items-center ">
            <h2
              data-testid="firstquestion"
              className="mb-40 text-3xl font-normal text-purple-accent"
            >
              Which of the following best describes you?
            </h2>
            <input
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full my-1 h-12 text-xl font-normal"
              value="New Buyer"
              type="submit"
              onClick={(e) => handleClick(e, 2, "q1", "a1")}
            ></input>
            <input
              data-testid="remortgage-button"
              value="Remortgage"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 3, "q1", "a2")}
            ></input>
            <input
              value="Moving House"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 99, "q1", "a3")}
            ></input>
            <input
              value="Just Browsing"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 99, "q1", "a4")}
            ></input>
          </form>
        </div>
      ) : null}
      {questionNumber === 2 ? (
        <div
          className={
            cardVisible
              ? "flex flex-col min-h-card-height min-max-width mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slidein"
              : "flex flex-col min-h-card-height min-max-width mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slideout"
          }
        >
          <form className="flex flex-col my-5 items-center">
            <h2
              data-testid="secondquestion"
              className="mb-40 text-3xl font-normal text-purple-accent"
            >
              How comfortable are you with mortgage terminology?
            </h2>
            <input
              value="I'm comfortable"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 99, "q2", "a1")}
            ></input>
            <input
              value="I'm not comfortable"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 99, "q2", "a2")}
            ></input>
          </form>
        </div>
      ) : null}

      {questionNumber === 3 ? (
        <div
          className={
            cardVisible
              ? "flex flex-col min-h-card-height min-max-width mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slidein"
              : "flex flex-col min-h-card-height min-max-width mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slideout"
          }
        >
          <form className="flex flex-col my-5 items-center ">
            <h2 className="mb-40 text-3xl font-normal text-purple-accent">
              What are your Remortgage goals?
            </h2>
            <input
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full my-1 h-12 text-xl font-normal"
              value="Repay your mortgage quicker"
              type="submit"
              onClick={(e) => handleClick(e, 99, "q2", "a1")}
            ></input>
            <input
              value="Reduce your monthly payments"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 99, "q2", "a2")}
            ></input>
            <input
              value="Change mortgage type"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 99, "q2", "a3")}
            ></input>
            <input
              data-testid="release-button"
              value="Release equity"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 99, "q2", "a4")}
            ></input>
          </form>
        </div>
      ) : null}

      {questionNumber === 4 ? (
        <div
          className={
            cardVisible
              ? "flex flex-col min-h-card-height min-max-width mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slidein"
              : "flex flex-col min-h-card-height min-max-width mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slideout"
          }
        >
          <form className="flex flex-col my-5 items-center">
            <h2 className="mb-40 text-3xl font-normal text-purple-accent">
              What are you looking for
            </h2>
            <input
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full my-1 h-12 text-xl font-normal"
              value="New Buyer"
              type="submit"
            ></input>
            <input
              value="Remortgage"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 2, "q2", "a2")}
            ></input>
            <input
              value="Moving House"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full my-1 h-12 text-xl font-normal"
            ></input>
            <input
              value="Just Browsing"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full my-1 h-12 text-xl font-normal"
            ></input>
          </form>
        </div>
      ) : null}
      {questionNumber === 1 ? (
        <div className="flex flex-row justify-center items-center">
          <div className="w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
          <div className="w-3 h-3 rounded-full bg-purple-300 shadow-card mx-1"></div>
          <div className="w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
        </div>
      ) : null}
      {questionNumber === 2 ? (
        <div className="flex flex-row justify-center items-center">
          <div className="w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
          <div className="w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
          <div className="w-3 h-3 rounded-full bg-purple-300 shadow-card mx-1"></div>
        </div>
      ) : null}
      {questionNumber === 1 ? (
        <div className="flex flex-col items-center">
          <Image
            className="mt-8"
            src={"/Logo_lendlogic.png"}
            width={200}
            height={300}
            alt="LandLogic Logo"
          />
        </div>
      ) : null}
      {questionNumber === 2 ? (
        <div className="flex flex-col items-center">
          <Image
            className="mt-8"
            src={"/Logo_lendlogic.png"}
            width={200}
            height={300}
            alt="LandLogic Logo"
          />
        </div>
      ) : null}
      {questionNumber === 99 ? (
        <div className="flex flex-row justify-center items-center">
          <Loading />
        </div>
      ) : null}
    </section>
  );
}
