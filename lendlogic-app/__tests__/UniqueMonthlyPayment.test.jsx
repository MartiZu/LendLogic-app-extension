import { render, screen } from "@testing-library/react";
import UniqueMonthlyPayment from "../app/dashboard/UniqueMonthlyPayment";

const mockValue = {
  loanLength: 25,
  loanAmount: 100000,
  userMonthlyPayment: 1000,
  mortgageType: "Fixed",
};

describe("UniqueMonthlyPayment", () => {
  describe("Render correct component", () => {
    it("should render LoanLengthTool component", () => {
      render(<UniqueMonthlyPayment q2={"a1"} value={mockValue} />);
      expect(
        screen.getByText("Your current mortgage will be repaid in")
      ).toBeInTheDocument();
      expect(screen.getByText("25 years")).toBeInTheDocument();
    });
    it("should render MonthlyPaymentTool component", () => {
      render(<UniqueMonthlyPayment q2={"a2"} value={mockValue} />);
      expect(
        screen.getByText("Your current monthly payment is")
      ).toBeInTheDocument();
      expect(screen.getByText("£1000")).toBeInTheDocument();
    });
    it("should render MortgageType component", () => {
      render(<UniqueMonthlyPayment q2={"a3"} value={mockValue} />);
      expect(
        screen.getByText("You have paid towards your mortgage")
      ).toBeInTheDocument();
      expect(screen.getByText("Fixed")).toBeInTheDocument();
    });
    it("should render ReleaseEquityTool component", () => {
      render(<UniqueMonthlyPayment q2={"a4"} value={mockValue} />);
      expect(
        screen.getByText("You remaining balance on your mortgage is")
      ).toBeInTheDocument();
      expect(screen.getByText("£100000")).toBeInTheDocument();
    });
  });
});
