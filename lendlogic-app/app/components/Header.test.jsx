import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { describe } from "node:test";

describe("Header", () => {
  it("renders the correct content", () => {
    // locator
    render(<Header />);
    //assertion
    expect(screen.getByAltText("LandLogic Logo")).toBeInTheDocument();
    expect(screen.getByText("LendLogic")).toBeInTheDocument();
  });
  it("has the correct CSS classes", () => {
    // locator
    render(<Header />);
    // assertion
    expect(screen.getByRole("banner")).toHaveClass("flex-row");
  });
});
