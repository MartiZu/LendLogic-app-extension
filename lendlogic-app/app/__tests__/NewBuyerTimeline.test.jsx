import { fireEvent, render, screen } from "@testing-library/react";
import NewBuyerTimeline from "../dashboard/newbuyer_components/NewBuyerTimeline";

const mockSteps = [
  { id: 1, title: "Step 1", tasks: ["Task 1", "Task 2"] },
  { id: 2, title: "Step 2", tasks: ["Task 3", "Task 4"] },
];

describe("Test on the NewBuyerTimeline component", () => {
  it("renders the NewBuyerTimeline component correctly", () => {
    render(<NewBuyerTimeline steps={mockSteps} />);
    expect(screen.getByText("Step 1")).toBeInTheDocument();
  });
  it("renders the Step component correctly", () => {
    render(<NewBuyerTimeline steps={mockSteps} />);
    const button = screen.getByText("Step 1");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByText("Task 3")).toBeNull();
  });
});
