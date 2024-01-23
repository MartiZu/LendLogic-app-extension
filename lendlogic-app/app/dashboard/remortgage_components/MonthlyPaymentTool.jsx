"use client";

import { useState } from "react";

export default function MonthlyPaymentTool({ q2, value }) {
  //destructing the object returned from the custom hook
  const { loanLength, loanAmount, userMonthlyPayment, userInterestRate } =
    value;
  const [monthlyPayment, setMonthlyPayment] = useState(userMonthlyPayment);
  const [interestRate, setInterestRate] = useState(userInterestRate);
  const [loanTerm, setLoanTerm] = useState(loanLength);

  function updateMonthlyPayment() {
    let payment = interestRate * 0.01 * monthlyPayment;
    console.log(payment);
    let newMonthlyPayment = loanAmount / (loanTerm * 12) + payment - 100;
    console.log(newMonthlyPayment);
    setMonthlyPayment(Math.ceil(newMonthlyPayment));
    // console.log(monthlyPayment);
  }
  return (
    <div className="mt-8 mx-4 text-center text-2xl">
      <p className="py-4 font-normal text-xl">
        Refinancing with a lower interest rate or extending your mortgage term
        could help you to reduce your monthly payments. Explore more with our
        tools.
      </p>
      <p className="py-2 font-normal text-xl">
        Your new monthly payment could be{" "}
        <span
          className="text-2xl font-bold text-purple-accent "
          data-testid="monthlyPayment"
        >
          {monthlyPayment}
        </span>{" "}
        with a remaining balance of{" "}
        <span className="text-2xl font-bold text-purple-accent">
          £{loanAmount}
        </span>
      </p>
      <div id="toggles" className="flex flex-col items-center">
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
        <label className="py-2 font-normal text-xl" htmlFor="loanTerm">
          Loan Term: {loanTerm}
        </label>
        <input
          id="loanTerm"
          className="w-1/2"
          type="range"
          min="0"
          max="35"
          step=".5"
          value={loanTerm}
          onChange={(e) => {
            setLoanTerm(e.target.value);
            updateMonthlyPayment();
          }}
        />
      </div>
    </div>
  );
}
