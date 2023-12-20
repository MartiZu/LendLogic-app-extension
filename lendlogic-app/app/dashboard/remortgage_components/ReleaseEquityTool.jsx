"use client";
import { useState, useEffect } from "react";

export default function ReleaseEquityTool({ q2, value }) {
  //destructing the object returned from the custom hook
  const { loanLength, loanAmount, userMonthlyPayment, userInterestRate } =
    value;
  const [monthlyPayment, setMonthlyPayment] = useState(userMonthlyPayment);
  const [interestRate, setInterestRate] = useState(userInterestRate);
  const [loanTerm, setLoanTerm] = useState(loanLength);

  function updateMonthlyPayment() {
    let newMonthlyPayment = (loanAmount / (loanTerm * 12)) * interestRate;
    setMonthlyPayment(Math.ceil(newMonthlyPayment));
    // console.log(monthlyPayment);
  }
  return (
    <div className="mt-8 mx-4 text-center text-2xl">
      {/* <div className="py-4">
        Your new monthly payment could be{" "}
        <span className="text-2xl font-bold text-purple-accent">
          {monthlyPayment}
        </span>
      </div>
      <div className="py-4">
        Your remaining balance is{" "}
        <span className="text-2xl font-bold text-purple-accent">
          £{loanAmount}
        </span>
      </div>
      <div id="toggles" className="flex flex-col items-center">
        <label className="py-4" htmlFor="interestRate">
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
        <label className="py-4" htmlFor="loanTerm">
          Loan Term: {loanTerm}
        </label>
        <input
          id="loanTerm"
          className="w-1/2"
          type="range"
          min="5"
          max="35"
          step="1"
          value={loanTerm}
          onChange={(e) => {
            setLoanTerm(e.target.value);
            updateMonthlyPayment();
          }}
        />
      </div> */}
    </div>
  );
}