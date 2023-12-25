import { render, screen, fireEvent } from "@testing-library/react";
import RemortgageHomeTimeline from "../app/dashboard/remortgage_components/RemortgageHomeTimeline";

describe("RemortgageHomeTimeline component", () => {
  it("timeline visible based on button click", () => {
    const steps = {
      steps: ["Step 1", "Step 2", "Step 3"],
    };

    render(<RemortgageHomeTimeline steps={steps} />);

    // Click the button to open timeline
    const button = screen.getByText("Find Out More");
    fireEvent.click(button);

    // Check if the timeline becomes visible after the click
    expect(
      screen.getByTestId("RemortgageHomeTimeline-findoutmore-hide")
    ).toBeInTheDocument();

    // Click the button again to timeline visibility
    // fireEvent.click(button);

    // // Check if the next component is visible after the click
    // expect(screen.getByTestId("step-div")).toBeInTheDocument();
  });
});
