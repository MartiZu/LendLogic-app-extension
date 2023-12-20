import { render, screen, fireEvent } from "@testing-library/react";
//userEvent is an alternative to fireEvent
import { describe } from "node:test";

import { CookieButton } from "./CookieButton";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("CookieButton", () => {
  it("renders the CookieButton component with the user prop", () => {
    const user = "John";
    render(<CookieButton user={user} />);
    const button = screen.getByText("John's journey");
    expect(button).toBeInTheDocument();
  });
  it("renders the CookieButton component with the setCookie prop", () => {
    const mockSetCookie = jest.fn();
    render(<CookieButton setCookie={mockSetCookie} user={"John"} />);
    const button = screen.getByText("John's journey");
    fireEvent.click(button);
    expect(mockSetCookie).toHaveBeenCalled();
  });
});
