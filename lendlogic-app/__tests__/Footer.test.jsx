import { render, screen } from "@testing-library/react";
import Footer from "../app/components/Footer";
import { describe } from "node:test";

describe("Footer", () => {
  it("correct content is rendered", () => {
    // locator
    render(<Footer />);
    //assertion
    expect(screen.getByText("LendLogic")).toBeInTheDocument();
  });
});
