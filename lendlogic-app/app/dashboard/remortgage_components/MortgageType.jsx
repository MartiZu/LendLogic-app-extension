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
  const [popUp, setPopUp] = useState(false);
  const [earlyRepaymentCharge, setEarlyRepaymentCharge] = useState(0);
  const [savings, setSavings] = useState(0);

  //handle input search
  const handleSearchInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
  };
  //handle search button click
  const handleSearchButtonClick = () => {
    //ensure that searchInput is a valid number
    const percentage = parseFloat(searchInput);

    if (!isNaN(percentage)) {
      //convert remaining years and months to monthss
      const totalMonthsRemaining = remainingYears * 12 + remainingMonths;

      //calculate Early Repayment Charge based on the percentage the user had entered
      let newCharge =
        Math.floor((percentage / 100) * loanAmount * totalMonthsRemaining) / 12;
      //calculate savings based on userInterestRate for the same period
      let newSavings =
        Math.floor(
          (userInterestRate / 100) * loanAmount * totalMonthsRemaining
        ) / 12;
      //set savings
      setSavings(newSavings);
      //display payment required to change mortgage type and savings
      setPopUp(true);
      setTimeout(() => setPopUp(false), 120000);

      // alert(
      //   `Early Repayment Charge: £ ${earlyRepaymentCharge} and you will save ${savings}`
      // );
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
    // Convert the time difference from milliseconds to days
    let days = Math.floor(adjustedTimeDifference / (1000 * 3600 * 24));
    // Calculate the fixed term length in number
    const fixedTermYears = parseInt(fixedTermLength.match(/\d+/)[0], 10);
    //make the term in days
    const fixedTermDays = fixedTermYears * 365;
    //calculate the remaining time in day
    let remainingDays = fixedTermDays - days;
    //convert remaining days to years and months
    const years = Math.floor(remainingDays / 365);
    const months = Math.floor((remainingDays % 365) / 30);
    setRemainingYears(years);
    setRemainingMonths(months);
  };

  useEffect(() => {
    remainingFixedTermTime();
  }, []);

  return (
    <div className="mt-8 mx-4 text-center text-2xl">
      <p className="py-4 font-normal text-xl">
        Chosing to switch rate is possible. Changing from variable to fixed rate
        is very easy. The reverse will cause you to have to pay an early
        repayment charge, but could make you save a lot of money.
      </p>
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
        <p className="py-2 font-normal text-xl" data-testid="paragraph">
          Thinking about changing mortgage type?
        </p>
        <p className="py-2 font-normal text-xl">
          Enter your repayment charge here
        </p>
        <div className="flex flex-row w-72 justify-center py-3">
          <input
            data-testid="search-input"
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
        {popUp ? (
          <p className="py-2 font-normal text-xl">
            Your early Repayment Charge is{" "}
            <span className="text-2xl font-bold text-purple-accent">
              £{earlyRepaymentCharge}
            </span>{" "}
            and you will save{" "}
            <span className="text-2xl font-bold text-purple-accent">
              £{savings}
            </span>
            .
          </p>
        ) : null}
      </div>
    </div>
  );
}
