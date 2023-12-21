import React, { use } from "react";
import { useState, useEffect } from "react";

export default function MortageType({ value, q2 }) {
  // Pull mortage type from database
  const {
    loanAmount,
    userInterestRate,
    mortgageType,
    fixedTermLength,
    startDate,
  } = value;
  //seacrh state
  const [searchInput, setSearchInput] = useState("");
  const [remainingYears, setRemainingYears] = useState(0);
  const [remainingMonths, setRemainingMonths] = useState(0);

  //handle input search
  const handleSearchInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    // const isValidNumber = /^[0-9]+$/.test(input);
    // if (isValidNumber) {
    //   setSearchInput(input);
    // } else {
    //   alert("Please enter a valid number");
    // }
  };
  const handleSearchButtonClick = () => {
    //ensure that searchInput is a valid number
    const percentage = parseFloat(searchInput);

    if (!isNaN(percentage)) {
      //convert remaining years and months to monthss
      const totalMonthsRemaining = remainingYears * 12 + remainingMonths;

      //calculate Early Repayment Charge based on the percentage the user had entered
      const earlyRepaymentCharge =
        Math.floor((percentage / 100) * loanAmount * totalMonthsRemaining) / 12;
      //calculate savings based on userInterestRate for the same period
      const savings =
        Math.floor(
          (userInterestRate / 100) * loanAmount * totalMonthsRemaining
        ) / 12;
      console.log("savings", savings);
      //display payment required to change mortgage type and savings
      alert(
        `Early Repayment Charge: £ ${earlyRepaymentCharge} and you will save ${savings}`
      );
    } else {
      alert("Please enter a valid percentage.");
    }
  };
  //calculate remaining time, taking today's date and the start date, calculate an avarage
  const remainingFixedTermTime = () => {
    // Work out the difference between the current date and the start date
    const currentDate = new Date();
    const startDateObj = new Date(startDate); // Assuming startDate is in a valid date format
    const timeDifference = startDateObj - currentDate;

    // start date is in the past, adjust the calculation to get a positive value
    const adjustedTimeDifference = Math.abs(timeDifference);
    console.log("adjusted time difference", adjustedTimeDifference);
    // Convert the time difference from milliseconds to years, months, and days
    let years = Math.floor(adjustedTimeDifference / (1000 * 3600 * 24 * 365));
    let months = Math.floor(adjustedTimeDifference / (1000 * 3600 * 24 * 30));
    console.log("remaining months", remainingMonths);
    // Calculate the fixed term length in years
    const fixedTermYears = parseInt(fixedTermLength.match(/\d+/)[0], 10);
    // Calculate the remaining time in years
    const yearsRemaining = Math.max(fixedTermYears - years, 0);
    const monthsRemaining = Math.max(12 - months, 0);
    setRemainingYears(yearsRemaining);
    setRemainingMonths(monthsRemaining);
  };

  useEffect(() => {
    remainingFixedTermTime();
  }, []);

  return (
    <div className="mt-8 mx-4 text-center text-2xl">
      <p className="py-2 font-normal text-xl">
        {" "}
        You have{" "}
        <span className="text-2xl font-bold text-purple-accent">
          {remainingYears} years and {remainingMonths} months{" "}
        </span>{" "}
        left on your fixed term, with a fixed rate of{" "}
        <span className="text-2xl font-bold text-purple-accent">
          {userInterestRate}%{" "}
        </span>
        and a remaining balance of{" "}
        <span className="text-2xl font-bold text-purple-accent">
          £{loanAmount}
        </span>
      </p>
      <p className="py-2 font-normal text-xl">
        The current market average interest rate is{" "}
        {/*hardcoded interest rate*/}
        <span className="text-2xl font-bold text-purple-accent">2.9%</span>
      </p>
      <div className="flex flex-col items-center">
        <p className="py-2 font-normal text-xl">
          Thinking about changing mortgage type? 
        </p>
        <p className="py-2 font-normal text-xl">Enter your repayment
          charge here</p>
        <div className="flex flex-row w-72 justify-center py-3">
          <input
            type="text"
            placeholder="Enter number"
            value={searchInput}
            onChange={handleSearchInputChange}
            className="w-32 h-12 p-2 border rounded-l-full text-center text-base focus:outline-none"
          />
          <button
            onClick={handleSearchButtonClick}
            className="w-20 h-12 bg-purple-accent rounded-r-full text-off-white text-base font-semibold shadow-button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

