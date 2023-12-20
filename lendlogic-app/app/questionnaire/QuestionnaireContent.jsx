"use client";
//import the get started card and the pref tool
import GetStartedCard from "./GetStartedCard";
import PreferenceTool from "./PreferenceTool";
import { useState } from "react";
import Image from "next/image";

// this allows us to convert the page into a server rendered thing
// whcih means we can use cookies
export default function QuestionnaireContent({ cookieHandler }) {
  //define the state that decides which component is visible
  const [preferenceToolVisible, setPreferenceToolVisible] = useState(false);

  //function to handle the click on GetStartedTool so that it changes the above state
  const handleSubmit = () => {
    setPreferenceToolVisible(true);
    // console.log(preferenceToolVisible);
  };

  //use ternary operator to decide which to show
  return (
    <>
      {!preferenceToolVisible ? (
        <div className="flex flex-col items-center">
          <GetStartedCard handleSubmit={handleSubmit} />
          <Image
            className="mt-8"
            src={"/Logo_lendlogic.png"}
            width={200}
            height={300}
            alt="LandLogic Logo"
          />
        </div>
      ) : (
        <>
          <PreferenceTool cookieHandler={cookieHandler} />
        </>
      )}
    </>
  );
}
