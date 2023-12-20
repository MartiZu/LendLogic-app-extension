import { render, screen, fireEvent } from "@testing-library/react";
import { describe } from "node:test";
import RemortgageReport from "./RemortgageReport";

describe("RemortgageReport", () => {
  describe("Render", () => {
    it("should render the component", () => {
      render(<RemortgageReport />);
      expect(screen.getByText("Your Remortgage Report")).toBeInTheDocument();
    });
  });

  describe("Function", () => {
    it("call clickHandler when button is clicked", () => {
      const mockClickHandler = jest.fn();
      render(<RemortgageReport clickHandler={mockClickHandler} />);
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(mockClickHandler).toHaveBeenCalled();
    });
  });
});
