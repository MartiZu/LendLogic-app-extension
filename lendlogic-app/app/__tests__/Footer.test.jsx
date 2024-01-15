import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer", () => {
  it("correct content is rendered", () => {
    // locator
    render(<Footer />);
    //assertion
    expect(screen.getByText("LendLogic")).toBeInTheDocument();
  });
});
