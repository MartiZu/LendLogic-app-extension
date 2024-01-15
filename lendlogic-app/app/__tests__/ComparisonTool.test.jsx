import { render, screen, fireEvent } from "@testing-library/react";
import ComparisonTool from "../dashboard/ComparisonTool";

describe("Comparison", () => {
  it("looking for heading for comparison tool", () => {
    render(<ComparisonTool />);
    expect(
      screen.getByText("Welcome to the comparison tool")
    ).toBeInTheDocument();
  });
});
