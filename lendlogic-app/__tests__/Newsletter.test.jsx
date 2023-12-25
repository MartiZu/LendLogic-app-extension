import { render, screen, fireEvent } from "@testing-library/react";
import Newsletter from "../app/dashboard/Newsletter";

describe("Newsletter", () => {
  describe("Render", () => {
    it("correct content is rendered", () => {
      // locator
      render(<Newsletter />);
      //assertion
      expect(
        screen.getByText("Sign up for our newsletter")
      ).toBeInTheDocument();
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
    it("handleSubmit is generating an alert", () => {
      const alertMock = jest.spyOn(window, "alert").mockImplementation();
      render(<Newsletter />);
      const button = screen.getByText("Sign up");
      fireEvent.click(button);
      expect(alertMock).toHaveBeenCalled();
    });
    it("value is email", () => {
      // const mockHandleInputChange = jest.fn();
      const event = {
        target: { value: "example@email.com" },
      };
      render(<Newsletter />);
      const input = screen.getByPlaceholderText("Email address");
      fireEvent.change(input, event);
      expect(input.value).toBe("example@email.com");
    });
    it("button submits email correctly", () => {
      const logSpy = jest.spyOn(global.console, "log");
      render(<Newsletter />);
      const input = screen.getByPlaceholderText("Email address");
      const button = screen.getByText("Sign up");
      const event = {
        target: { value: "example@email.com" },
      };
      fireEvent.change(input, event);
      fireEvent.click(button);
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledWith(
        "Data submitted",
        "example@email.com"
      );
    });
  });
});
