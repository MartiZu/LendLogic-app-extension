import React from "react";

const UniqueMonthlyPayment = ({ q2, value }) => {
  const {
    loanLength,
    loanAmount,
    userMonthlyPayment,
    userInterestRate,
    mortgageType,
  } = value;

  const remainingPayment = 200000 - loanAmount

  return (
    <p className="py-2 font-normal text-xl">
      {q2 === "a1" ? "Your current mortgage will be repaid in " : null}
      {q2 === "a2" ? "Your current monthly payment is " : null}
      {q2 === "a3" ? "Your current mortgage type is " : null}
      {q2 === "a4" ? "You have paid towards your mortgage " : null}
      <span className="text-2xl font-bold text-purple-accent">
        {q2 === "a1" ? `${loanLength} years` : null}
        {q2 === "a2" ? `£${userMonthlyPayment}` : null}
        {q2 === "a3" ? `${mortgageType}` : null}
        {q2 === "a4" ? `£${remainingPayment}` : null}
      </span>
    </p>
  );
};

export default UniqueMonthlyPayment;
