import { render, screen, fireEvent } from "@testing-library/react";
import MortgageType from "../app/dashboard/remortgage_components/MortgageType";

const mockValue = {
  loanAmount: 100000,
  userInterestRate: 3.5,
  mortgageType: "Fixed",
  fixedTermLength: "2 years",
  startDate: "2022-01-01",
};

describe("MortgageType", () => {
  it("should render the component", () => {
    render(<MortgageType value={mockValue} />);
    expect(screen.getByTestId("paragraph")).toBeInTheDocument();
  });
  it("handles search input change", () => {
    render(<MortgageType value={mockValue} />);
    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "10" } });
    expect(input.value).toBe("10");
  });
  // it("handles search button click with valid input", () => {
  //   render(<MortgageType value={mockValue} />);
  //   const input = screen.getByPlaceholderText("Enter number");
  //   const button = screen.getByRole("button", { name: "Search" });
  //   // Set a valid value in the input
  //   fireEvent.change(input, { target: { value: "10" } });
  //   // Trigger the button click
  //   fireEvent.click(button);
  // });
  it("handles search button click with invalid input", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    render(<MortgageType value={mockValue} />);
    const input = screen.getByPlaceholderText("Enter number");
    const button = screen.getByRole("button", { name: "Search" });
    // Set an invalid value in the input
    fireEvent.change(input, { target: { value: "abc" } });
    // Trigger the button click
    fireEvent.click(button);
    expect(alertMock).toHaveBeenCalled();
  });
});
