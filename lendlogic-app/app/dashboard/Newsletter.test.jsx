import { render, screen, fireEvent } from "@testing-library/react";
import Newsletter from "./Newsletter";
import { describe } from "node:test";


describe("Newsletter", () => {
  describe("Render", () => {
  it("correct content is rendered", () => {
    // locator
    render(<Newsletter />);
    //assertion
    expect(screen.getByText("Sign up for our newsletter")).toBeInTheDocument();
  });
  it("correct input is rendered", () => {
    // locator
    render(<Newsletter />);
    //assertion
    expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
  });
  it("correct button is rendered", () => {
    // locator
    render(<Newsletter />);
    //assertion
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  });
  describe("Function", () => {
  it("handleInputChange is submitting email correctly", () => {
    //
    const mockHandleSubmit = jest.fn();
    // const mockSetTimeout = jest.useFakeTimers();
    //
    render(<Newsletter />)
    const button = screen.getByText("Sign up")
    fireEvent.click(button)

    expect(mockHandleSubmit).toHaveBeenCalled();
    // expect(mockSetTimeout).toHaveBeenCalled();
  })
  it("value is email", () => {
    // const mockHandleInputChange = jest.fn();
    const event = {
      target: {value: "example@email.com"}
    }

    render(<Newsletter />)
    const input = screen.getByPlaceholderText("Email address");
    fireEvent.change(input, event)

    expect(input.value).toBe("example@email.com")
  })
})
});