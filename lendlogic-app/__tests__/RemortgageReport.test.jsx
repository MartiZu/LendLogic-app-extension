import { render, screen, fireEvent } from "@testing-library/react";
import { describe } from "node:test";
import RemortgageReport from "../app/dashboard/remortgage_components/RemortgageReport";

const mockValue = {
  loanLength: "99",
  loanAmount: "999999",
  userMonthlyPayment: "999",
  userInterestRate: "9.9",
};

describe("RemortgageReport", () => {
  describe("Render", () => {
    it("should render the component", () => {
      render(<RemortgageReport value={mockValue} />);
      expect(screen.getByText("Your Remortgage Report")).toBeInTheDocument();
    });
  });

  describe("Function", () => {
    it("call clickHandler when button is clicked", () => {
      render(<RemortgageReport value={mockValue} />);
      const button = screen.getByRole("button", { name: "Find Out More" });
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
      const clickedButton = screen.getByRole("button", { name: "Hide" });
      expect(clickedButton).toBeInTheDocument();
    });
  });
});
