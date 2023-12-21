import { render, screen, fireEvent } from "@testing-library/react";
import ComparisonTool from "./ComparisonTool";
import { describe } from "node:test";


describe("Comparison", () => {
it("looking for heading for comparison tool", () => {
    render(<ComparisonTool />);
    expect(screen.getByText("Welcome to the comparison tool")).toBeInTheDocument();
}) 
});

