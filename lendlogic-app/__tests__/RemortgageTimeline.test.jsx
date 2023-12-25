import { fireEvent, render, screen } from "@testing-library/react";
import RemortgageTimeline from "../app/dashboard/remortgage_components/RemortgageTimeline";

const mockSteps = [
  { id: 1, title: "Step 1", tasks: ["Task 1", "Task 2"] },
  { id: 2, title: "Step 2", tasks: ["Task 3", "Task 4"] },
];

describe("Test on the RemortgageTimeline component", () => {
  it("renders the RemortgageTimeline component correctly", () => {
    render(<RemortgageTimeline steps={mockSteps} />);
    expect(screen.getByText("Step 1")).toBeInTheDocument();
  });
  it("renders the Step component correctly", () => {
    render(<RemortgageTimeline steps={mockSteps} />);
    const button = screen.getByText("Step 1");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByText("Task 3")).toBeNull();
  });
});
