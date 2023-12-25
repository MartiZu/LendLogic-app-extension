import { fireEvent, render, screen } from "@testing-library/react";
import NewBuyerTimeline from "../app/dashboard/newbuyer_components/NewBuyerTimeline";
import { describe } from "node:test";

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
    //get the div with the text Step 1
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Step 1"));
    expect(screen.getByTestId("step-list-id")).toBeInTheDocument();
  });
});
