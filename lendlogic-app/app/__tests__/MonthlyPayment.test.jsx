import { render, screen, fireEvent } from "@testing-library/react";
import MonthlyPaymentTool from "../dashboard/remortgage_components/MonthlyPaymentTool";

jest.mock("../app/customHooks/DisplayUser", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockValue = {
  loanLength: 10,
  userMonthlyPayment: 800,
  userInterestRate: 3.5,
  loanAmount: 150000,
};

describe("MonthlyPayment", () => {
  describe("Render", () => {
    it("should render the component", () => {
      render(<MonthlyPaymentTool value={mockValue} />);
      expect(
        screen.getByText("Your new monthly payment could be")
      ).toBeInTheDocument();
    });
  });
});

describe("Function", () => {
  it("should update monthly payment when interest rate is changed", () => {
    render(<MonthlyPaymentTool value={mockValue} />);

    const input = screen.getByTestId("interestRate");
    fireEvent.change(input, { target: { value: 800 } });

    expect(screen.getByTestId("monthlyPayment")).toBeInTheDocument(800);
  });
});
