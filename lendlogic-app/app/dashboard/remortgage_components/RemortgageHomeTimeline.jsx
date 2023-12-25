"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RemortgageTimeline from "./RemortgageTimeline";

export default function RemortgageHomeTimeline({ steps }) {
  //state to handle whether tool is image is displayed
  const [toolVisible, setToolVisible] = useState(false);
  //write click hangler for toolVisible button
  function clickHandler() {
    setToolVisible(!toolVisible);
  }
  const stepsArr = steps.remortgageSteps;

  const buttonText = toolVisible ? "Hide" : "Find Out More";
  return (
    <>
      <div className="mt-6 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
        <h2 className="font-normal py-7 text-3xl text-purple-accent">
          Remortgage Timeline
        </h2>
        <p className="py-2 font-normal text-xl">
          Remortgageing a home is one of the most stressful things you'll do and sadly
          it's not become any easier over time. Knowing the rough outline of how
          the process works though will make the ride that bit smoother.
        </p>
        {toolVisible ? (
          <RemortgageTimeline steps={stepsArr} />
        ) : (
          <div className="flex justify-center">
            <Image
              src="/shake-hands.png"
              alt="Two people shaking hands"
              width={300}
              height={200}
            />
          </div>
        )}
        <button data-testid="RemortgageHomeTimeline-findoutmore-hide"
          className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button cursor-pointer"
          type="submit"
          onClick={clickHandler}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}
