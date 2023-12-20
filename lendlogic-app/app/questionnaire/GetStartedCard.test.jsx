import { render, screen, fireEvent  } from "@testing-library/react";
//userEvent is an alternative to fireEvent
import { describe } from "node:test";
import GetStartedCard from "./GetStartedCard";

describe("GetStartedCard", () => {
  it("renders the GetStartedCard page", () => {
    //arrange
    render(<GetStartedCard />);
  });
  it("calls handleSubmit on button click", () => {
    //create mock function using fn()
    const mockHandleSubmit = jest.fn();
    // render component with the mock function as a prop
    render(<GetStartedCard handleSubmit={mockHandleSubmit} />);
    const button = screen.getByText(/Let's get started!/);
    //action
    fireEvent.click(button);
    //assert if function has been called
    expect(mockHandleSubmit).toHaveBeenCalled();
  });
});
