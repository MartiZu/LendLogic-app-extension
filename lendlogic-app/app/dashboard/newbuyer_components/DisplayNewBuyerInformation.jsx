"use client";

import { useState, useEffect } from "react";

export default function DisplayNewBuyerInformation({
  value,
  deposit,
  updateDepositValue,
}) {
  // const { salary, property_value, credit_score } = value;
  // console.log(value);
  const [propertyValue, setPropertyValue] = useState(value);
  const [monthlySaving, setMonthlySaving] = useState(500);
  const [years, setYears] = useState(5);
  const [months, setMonths] = useState(0);

  // Handle change for the property value input
  const handlePropertyValueChange = (e) => {
    const newValue = e.target.value;
    setPropertyValue(newValue);
  };

  // useEffect to recalculate when property value, years, or months change
  useEffect(() => {
    //update deposit based on new propertyvalue
    const newDeposit = propertyValue * 0.1;
    const totalMonths = newDeposit / monthlySaving;
    setYears(Math.floor(totalMonths / 12));
    setMonths(Math.floor(totalMonths % 12));
    updateDepositValue(newDeposit);
    // setMonthlySaving(newMonthlySaving);
  }, [propertyValue, monthlySaving]);

  return (
    <div className="mt-8 mx-4 text-center text-2xl">
      {/* Display the calculated monthly saving and estimated time to save */}
      <p className="py-2 font-normal text-xl">
        Your monthly saving could be{" "}
        <span className="text-2xl font-bold text-purple-accent">
          £{monthlySaving}
        </span>{" "}
        a month and have your deposit in{" "}
        <span className="text-2xl font-bold text-purple-accent">{years}</span>{" "}
        years and{" "}
        <span className="text-2xl font-bold text-purple-accent">{months}</span>{" "}
        months.
      </p>
      <div id="toggles" className="flex flex-col items-center">
        <label className="py-2 font-normal text-xl" htmlFor="monthlySaving">
          Monthly Saving: {monthlySaving}
        </label>
        <input
          id="monthlySaving"
          className="w-1/2 py-2"
          type="range"
          min="100"
          max="1000"
          step="50"
          value={monthlySaving}
          onChange={(e) => setMonthlySaving(e.target.value)}
        />
      </div>
      <div id="propertyInput" className="flex flex-col items-center">
        <label className="py-2 font-normal text-xl" htmlFor="propertyValue">
          Update the property value:{" "}
        </label>
        <div className="py-2 flex flex-row items-center justify-center">
          <p className="text-4xl pr-2 font-bold text-purple-accent">£</p>
          <input
            id="propertyValue"
            className="border-2 max-w-md border-purple-accent rounded-full w-1/2 h-12 pl-8 text-xl font-semibold shadow-button cursor-pointer"
            type="number"
            value={propertyValue}
            onChange={handlePropertyValueChange}
          />
        </div>
      </div>
    </div>
  );
}
