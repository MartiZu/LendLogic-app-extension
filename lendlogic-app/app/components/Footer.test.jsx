import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { describe } from "node:test";

describe("Footer", () => {
  it("correct content is rendered", () => {
    // locator
    render(<Footer />);
    //assertion
    expect(screen.getByText("LendLogic")).toBeInTheDocument();
  });
});
