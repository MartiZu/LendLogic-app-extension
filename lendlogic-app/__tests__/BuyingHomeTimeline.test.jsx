import { render, screen, fireEvent } from "@testing-library/react";
import BuyingHomeTimeline from "../app/dashboard/newbuyer_components/BuyingHomeTimeline";

describe("BuyingHome", () => {
  it("timeline visible based on button click", () => {
    const steps = {
      steps: ["Step 1", "Step 2", "Step 3"],
    };

    render(<BuyingHomeTimeline steps={steps} />);

    // Click the button to open timeline
    const button = screen.getByText("Find Out More");
    fireEvent.click(button);

    // Check if the timeline becomes visible after the click
    expect(screen.getByText("Hide")).toBeInTheDocument();

    // Click the button again to timeline visibility
    fireEvent.click(button);

    // Check if the tool becomes hidden again and you should not see "hide" text
    expect(screen.queryByText("Hide")).not.toBeInTheDocument();
  });
});
