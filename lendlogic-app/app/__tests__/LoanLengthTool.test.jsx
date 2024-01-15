import { render, screen, fireEvent } from "@testing-library/react";
import LoanLengthTool from "../dashboard/remortgage_components/LoanLengthTool";

// Mock the custom hook
jest.mock("../app/customHooks/DisplayUser", () => ({
  __esModule: true,
  default: jest.fn(),
}));

// provide mock data to the custom hook
const mockValue = {
  loanLength: 25,
  loanAmount: 100000,
  userMonthlyPayment: 1000,
  userInterestRate: 3.5,
};

describe("LoanLengthTool", () => {
  describe("Render", () => {
    it("should render the component", () => {
      render(<LoanLengthTool value={mockValue} />);
      expect(
        screen.getByText("Your new mortgage term length could be")
      ).toBeInTheDocument();
    });
  });
  describe("Function", () => {
    it("should update the monthly payment when the loan term is changed", () => {
      render(<LoanLengthTool value={mockValue} />);

      // store input element in a variable
      const input = screen.getByTestId("loanTerm");
      fireEvent.change(input, { target: { value: 15 } });

      expect(screen.getByText("Loan Term: 15")).toBeInTheDocument();
    });
    it("should update the interest rate when the loan term is changed", () => {
      render(<LoanLengthTool value={mockValue} />);

      // store input element in a variable
      const input = screen.getByTestId("interestRate");
      fireEvent.change(input, { target: { value: 3 } });

      expect(screen.getByText("Interest Rate: 3%")).toBeInTheDocument();
    });
  });
});
