import { render, screen, fireEvent } from "@testing-library/react";
import DisplayMortgageInformation from "../dashboard/remortgage_components/DisplayMortgageInformation";

const mockValue = {
  loanLength: 25,
  loanAmount: 100000,
  userMonthlyPayment: 1000,
  userInterestRate: 3.5,
  mortgageType: "Fixed",
  fixedTermLength: "5",
  startDate: Date(),
};

describe("DisplayMortgageInformation", () => {
  describe("Render correct component", () => {
    it("should render LoanLengthTool component", () => {
      render(<DisplayMortgageInformation q2={"a1"} value={mockValue} />);
      expect(
        screen.getByText("Your new mortgage term length could be")
      ).toBeInTheDocument();
    });
    it("should render MonthlyPaymentTool component", () => {
      render(<DisplayMortgageInformation q2={"a2"} value={mockValue} />);
      expect(
        screen.getByText("Your new monthly payment could be")
      ).toBeInTheDocument();
    });
    it("should render MortgageType component", () => {
      render(<DisplayMortgageInformation q2={"a3"} value={mockValue} />);
      expect(
        screen.getByText("The current market average interest rate is")
      ).toBeInTheDocument();
    });
    it("should render ReleaseEquityTool component", () => {
      render(<DisplayMortgageInformation q2={"a4"} value={mockValue} />);
      expect(
        screen.getByText("How much would you like to borrow?")
      ).toBeInTheDocument();
    });
  });
});
