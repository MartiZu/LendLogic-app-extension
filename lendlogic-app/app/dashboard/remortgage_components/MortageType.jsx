import React from "react";
import { useState, useEffect } from "react";

const MortageType = ({ value, q2 }) => {
  // Pull mortage type from database
  const {
    loanLength,
    loanAmount,
    userMonthlyPayment,
    userInterestRate,
    mortgageType,
    fixedTermLength,
    startDate,
  } = value;

  let yearsRemaining = 0;
  let monthsRemaining = 0;
  let daysRemaining = 0;

  const [monthlyPayment, setMonthlyPayment] = useState(userMonthlyPayment);
  const [interestRate, setInterestRate] = useState(userInterestRate);
  const [loanTerm, setLoanTerm] = useState(loanLength);


  function remainingFixedTermTime() {
    // Work out the difference between the current date and the start date
    const currentDate = new Date();
    const startDateObj = new Date(startDate); // Assuming startDate is in a valid date format
    console.log("line 32 mortageg type", currentDate);
    console.log("line 33 mortageg type", startDateObj);

    const timeDifference = startDateObj - currentDate;
    console.log("line 36", timeDifference);

    // Convert the time difference from milliseconds to years, months, and days
    yearsRemaining = Math.floor(timeDifference / (1000 * 3600 * 24 * 365));
    monthsRemaining = Math.floor(
      (timeDifference % (1000 * 3600 * 24 * 365)) / (1000 * 3600 * 24 * 30)
    );
    daysRemaining = Math.floor(
      (timeDifference % (1000 * 3600 * 24 * 30)) / (1000 * 3600 * 24)
    );
    console.log("line 42", yearsRemaining);
    console.log("line 43", monthsRemaining);
    console.log("line 44", daysRemaining);

    // Display the remaining fixed term in years, months, and days
    // console.log(`Remaining Fixed Term: ${yearsRemaining} years, ${monthsRemaining} months, ${daysRemaining} days`);
  }

  remainingFixedTermTime();

  return (
    <div className="mt-8 mx-4 text-center text-2xl">
      <div className="p-2 font-normal text-xl">
        Your current plan has a fixed rate length of{" "}
        <span className="text-2xl font-bold text-purple-accent">
          {fixedTermLength}
        </span>{" "}
        and your remaning balance is{" "}
        <span className="text-2xl font-bold text-purple-accent">
          £{loanAmount}
        </span>
      </div>
      <div id="toggles" className="flex flex-col items-center">
        <label className="py-2 p-2 font-normal text-xl" htmlFor="interestRate">
          Your interest rate is:{" "}
          <span className="text-2xl font-bold text-purple-accent">
            {interestRate}%
          </span>
        </label>
        <label className="py-2 p-2 font-normal text-xl" htmlFor="interestRate">
          The current market avarage interest rate is{" "}
          <span className="text-2xl font-bold text-purple-accent">2.9%</span>
        </label>
        <div>
          {" "}
          <p className="py-2 font-normal text-xl">
            What is the early repayment charge? You have left on your fixed term:{" "}
            <span className="text-2xl font-bold text-purple-accent">
              {yearsRemaining} years, {monthsRemaining} months, {daysRemaining}{" "}
              days
            </span>
          </p>
          <p className="py-2 font-normal text-xl">Please enter the repayment percentage here</p>
          {/* <div className="flex flex-row w-72 justify-center py-3">
            <input
              type="text"
              placeholder="Enter number"
              value={searchInput}
              onChange={handleSearchInputChange}
              className="w-40 h-12 p-2 border rounded-l-full text-xl focus:outline-none"
            />
            <button
              onClick={handleSearchButtonClick}
              className="w-24 h-12 bg-purple-accent rounded-r-full text-off-white text-xl font-semibold shadow-button"
            >
              Search
            </button>
          </div> */}
        </div>{" "}
      </div>
    </div>
  );
};

export default MortageType;
