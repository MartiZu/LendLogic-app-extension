"use client";

import MonthlyPaymentTool from "./MonthlyPaymentTool";
import LoanLengthTool from "./LoanLengthTool";
import MortageType from "./MortageType";
import ReleaseEquityTool from "./ReleaseEquityTool";

export default function DisplayMortgageInformation({ q2, value }) {
  return (
    <>
      {q2 === "a1" ? <LoanLengthTool q2={q2} value={value} /> : null}
      {q2 === "a2" ? <MonthlyPaymentTool q2={q2} value={value} /> : null}
      {q2 === "a3" ? <MortageType q2={q2} value={value} /> : null}
      {q2 === "a4" ? <ReleaseEquityTool q2={q2} value={value} /> : null}
    </>
  );
}
