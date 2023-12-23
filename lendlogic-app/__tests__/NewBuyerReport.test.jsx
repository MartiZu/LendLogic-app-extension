import { render, screen, fireEvent } from "@testing-library/react";
import NewBuyerReport from "../app/dashboard/newbuyer_components/NewBuyerReport";
import { describe } from "node:test";

const mockProperties = {
  property: [{ searchPostcode: "AB1", searchValue: 100000 }],
};

const mockValue = {
  loanLength: "99",
  loanAmount: "999999",
  userMonthlyPayment: "999",
  userInterestRate: "9.9",
};

const mockHandleSearchButtonClick = jest.fn();
const mockClickHandler = jest.fn();

describe("Test on the NewBuyerReport component", () => {
  it("renders the NewBuyerReport component correctly", () => {
    render(<NewBuyerReport properties={mockProperties} value={mockValue} />);
    expect(screen.getByText("Find Out More")).toBeInTheDocument();
    expect(screen.getByText(/Your New Buyer Report/i)).toBeInTheDocument();
    // Click on the toggle button
    fireEvent.click(screen.getByTestId("newbuyerreport-findoutmore"));
    // Check if the next component is visible after the click
    // expect(screen.getByTestId("toggles")).toBeInTheDocument();
  });
  //   it("should search for a property", () => {
  //     render(<NewBuyerReport value={mockValue} properties={mockProperties} />);
  //     // Input a search postcode
  //     fireEvent.change(screen.getByPlaceholderText(/Enter postcode/i), {
  //       target: { value: "AB2" },
  //     });

  //     // Click the search button
  //     fireEvent.click(screen.getByTestId("search-button"));

  //     // After clicking, the property value and postcode should be updated
  //     expect(screen.getByTestId("postcode")).toBeInTheDocument();
  //     expect(mockClickHandler).toHaveBeenCalled();
  //   });
});
