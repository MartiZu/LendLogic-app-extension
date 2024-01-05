import { render, screen, fireEvent } from "@testing-library/react";
import NewBuyerReport from "./NewBuyerReport";
import { describe } from "node:test";

const mockProperties = {
  property: [
    { searchPostcode: "AB1", searchValue: 100000 },
    { searchPostcode: "AB2", searchValue: 200000 },
  ],
};

const mockValue = {
  loanLength: "99",
  loanAmount: "999999",
  userMonthlyPayment: "999",
  userInterestRate: "9.9",
  postcode: "AB1",
  property_value: 90000,
};

describe("Test on the NewBuyerReport component", () => {
  it("renders the NewBuyerReport component correctly", () => {
    render(<NewBuyerReport properties={mockProperties} value={mockValue} />);
    expect(screen.getByText("Find Out More")).toBeInTheDocument();
    expect(screen.getByText(/Your New Buyer Report/i)).toBeInTheDocument();
    // Click on the toggle button
    fireEvent.click(screen.getByText("Find Out More"));
    expect(screen.getByText("Hide")).toBeInTheDocument();
  });
  it("should search for a property", () => {
    render(<NewBuyerReport value={mockValue} properties={mockProperties} />);
    expect(screen.getAllByText("AB1"));
    expect(screen.getAllByText("£9000"));
    // Input a search postcode
    fireEvent.change(screen.getByPlaceholderText(/Enter postcode/i), {
      target: { value: "AB2 1AB" },
    });

    // Click the search button
    fireEvent.click(screen.getByTestId("search-button"));

    // After clicking, the property value and postcode should be updated
    expect(screen.getAllByText("AB2"));
    expect(screen.getAllByText("£20000"));
  });
  it("should alert if invalid postcode", () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<NewBuyerReport value={mockValue} properties={mockProperties} />);
    // Input a search postcode
    fireEvent.change(screen.getByPlaceholderText(/Enter postcode/i), {
      target: { value: "AB2" },
    });
    // Click the search button
    fireEvent.click(screen.getByTestId("search-button"));
    // Expect an alert to pop up as invalid postcode
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith(
      "Please use a space in the postcode"
    );
  });
  it("should alert if postcode not found", () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<NewBuyerReport value={mockValue} properties={mockProperties} />);
    // Input a search postcode
    fireEvent.change(screen.getByPlaceholderText(/Enter postcode/i), {
      target: { value: "BA1 1AB" },
    });
    // Click the search button
    fireEvent.click(screen.getByTestId("search-button"));
    // Expect an alert to pop up as invalid postcode
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("Postcode not found");
  });
});
