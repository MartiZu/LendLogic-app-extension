"use client";
import RemortgageExpandChecklist from "./RemortgageExpandChecklist";
import { useState } from "react";

export default function RemortgageChecklist() {
  //state to handle whether tool is image is displayed
  const [toolVisible, setToolVisible] = useState(false);
  //write click hangler for toolVisible button
  function clickHandler() {
    setToolVisible(!toolVisible);
  }

  const buttonText = toolVisible ? "Hide" : "Find Out More";

  return (
    <>
      <div className="mt-6 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
        <div className="grid grid-cols-2 gap-4">
          <h2 className="col-span-2 font-normal py-7 text-3xl text-purple-accent">
            Remortgage Checklist
          </h2>
          <p className="col-span-2 py-2 font-normal text-xl">
            Everything you need to know when it comes to remortgage a property.
          </p>
          {toolVisible ? (
            <RemortgageExpandChecklist />
          ) : (
            <>
              <a
                target="_blank"
                className="bg-off-white text-lg font-normal flex items-center justify-center h-16 p-3 border-2 border-purple-accent rounded-full shadow-button"
                href="https://www.gov.uk/guidance/how-to-remortgage-your-help-to-buy-home-without-borrowing-more-money#making-changes-to-your-equity-loan"
              >
                Making changes to your equity loan
              </a>
              <a
                target="_blank"
                className="flex justify-center items-center h-16 bg-off-white text-lg font-normal p-3 border-2 border-purple-accent rounded-full shadow-button"
                href="https://www.gov.uk/guidance/how-to-remortgage-your-help-to-buy-home-without-borrowing-more-money#negative-equity"
              >
                Negative equity
              </a>
              <a
                target="_blank"
                className="bg-off-white flex items-center justify-center h-16 text-lg font-normal p-3 border-2 border-purple-accent rounded-full shadow-button"
                href="https://www.gov.uk/guidance/how-to-remortgage-your-help-to-buy-home-without-borrowing-more-money#remortgaging-with-a-current-or-new-lender"
              >
                Remortgaging with a new lender
              </a>
              <a
                target="_blank"
                className="bg-off-white flex items-center justify-center h-16 text-lg font-normal p-3 border-2 border-purple-accent rounded-full shadow-button"
                href="https://www.gov.uk/government/publications/repay-your-help-to-buy-equity-loan"
              >
                Repay your Help to Buy: Equity Loan
              </a>
            </>
          )}
        </div>
        <button
          className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button"
          type="submit"
          onClick={clickHandler}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}
