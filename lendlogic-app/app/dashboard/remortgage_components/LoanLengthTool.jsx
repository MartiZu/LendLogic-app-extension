"use client";

import { useState } from "react";

export default function LoanLengthTool({ q2, value }) {
  //destructing the object returned from the custom hook
  const { loanLength, loanAmount, userMonthlyPayment, userInterestRate } =
    value;
  const [monthlyPayment, setMonthlyPayment] = useState(userMonthlyPayment);
  const [interestRate, setInterestRate] = useState(userInterestRate);
  const [loanTerm, setLoanTerm] = useState(loanLength);
  const [totalAmount, setTotalAmount] = useState(loanAmount);
  const [lumpSum, setLumpSum] = useState(0);

  function updateMonthlyPayment() {
    let newMonthlyPayment = (totalAmount / (loanTerm * 12)) * interestRate;
    setMonthlyPayment(Math.ceil(newMonthlyPayment));
    // console.log(monthlyPayment);
  }

  const handleLoanValueChange = (e) => {
    const newValue = totalAmount - lumpSum;
    setTotalAmount(newValue);
    updateMonthlyPayment();
    //reset input
    setLumpSum(0);
  };
  return (
    <div className="mt-8 mx-4 text-center text-2xl">
      <p className="py-4 font-normal text-xl">
        If can chose to shorten your loan term, your monhtly payment may
        increase. Another way is making an extra payment each month or as a lump
        sum, reducing your balance.
      </p>
      <p className="py-2 font-normal text-xl">
        Your new mortgage term length could be{" "}
        <span className="text-2xl font-bold text-purple-accent">
          {loanTerm}
        </span>{" "}
        years with a monthly payment of{" "}
        <span className="text-2xl font-bold text-purple-accent">
          £{monthlyPayment}{" "}
        </span>
        for your remaining balance of{" "}
        <span className="text-2xl font-bold text-purple-accent">
          £{totalAmount}.
        </span>
      </p>
      <div id="toggles" className="flex flex-col items-center">
        <label className="py-2 font-normal text-xl" htmlFor="loanTerm">
          Loan Term: {loanTerm}
        </label>
        <input
          data-testid="loanTerm"
          id="loanTerm"
          className="w-1/2"
          type="range"
          min="5"
          max="25"
          step="1"
          value={loanTerm}
          onChange={(e) => {
            setLoanTerm(e.target.value);
            updateMonthlyPayment();
          }}
        />
        <label className="py-2 font-normal text-xl" htmlFor="interestRate">
          Interest Rate: {interestRate}%
        </label>
        <input
          data-testid="interestRate"
          id="interestRate"
          className="w-1/2"
          type="range"
          min="2"
          max="9"
          step="0.1"
          value={interestRate}
          onChange={(e) => {
            setInterestRate(e.target.value);
            updateMonthlyPayment();
          }}
        />
      </div>
      <div id="lump-sum" className="flex flex-col items-center">
        <label className="pt-4 font-normal text-xl" htmlFor="lumpSumValue">
          Pay a lump sum towards the loan amount:{" "}
        </label>

        <div className="flex flex-row w-72 justify-center py-3">
          <input
            type="text"
            placeholder="Enter sum"
            value={lumpSum}
            onChange={(e) => setLumpSum(e.target.value)}
            className="w-44 h-12 pl-4 py-2 border rounded-l-full text-xl focus:outline-none border-purple-accent border-r-0"
          />
          <button
            data-testid="search-button"
            onClick={handleLoanValueChange}
            className="w-24 h-12 bg-purple-accent rounded-r-full text-off-white text-xl font-semibold shadow-button cursor-pointer"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
