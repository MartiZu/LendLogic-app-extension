import { render, screen, fireEvent } from "@testing-library/react";
import { describe } from "node:test";
import DisplayMortgageInformation from "./DisplayMortgageInformation";

describe("DisplayMortgageInformation", () => {
  describe("Render", () => {
    it("should render the component", () => {
      render(<DisplayMortgageInformation />);
      expect(
        screen.getByText("Your new monthly payment could be")
      ).toBeInTheDocument();
    });
  });

  describe("Function", () => {
    it("should update monthly payment when interest rate is changed", () => {
      const mockUpdateMonthlyPayment = jest.fn();
      const event = {
        target: { value: "5" },
      };
      render(
        <DisplayMortgageInformation
          value={{
            loanLength: 30,
            loanAmount: 100000,
            userMonthlyPayment: 500,
            userInterestRate: 4,
          }}
          updateMonthlyPayment={mockUpdateMonthlyPayment}
        />
      );
      const input = screen.getByTestId("interestRate");
      //action
      fireEvent.change(input, event);
      //assertion
      expect(mockUpdateMonthlyPayment).toHaveBeenCalled();
    });
  });
});
