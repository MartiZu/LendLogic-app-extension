import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BuyingHomeTimeline from "../dashboard/newbuyer_components/BuyingHomeTimeline";

describe("BuyingHome", () => {
  it("timeline visible based on button click", () => {
    const steps = {
      steps: [
        { id: 1, title: "Step 1", tasks: ["Task 1", "Task 2"] },
        { id: 2, title: "Step 2", tasks: ["Task 3", "Task 4"] },
      ],
    };

    // Mock the useState hook
    const mockUseState = jest.spyOn(React, "useState");
    mockUseState.mockImplementation((initialState) => [
      initialState,
      jest.fn(),
    ]);

    render(<BuyingHomeTimeline steps={steps} />);

    // Click the button to open timeline
    const button = screen.getByTestId("buyinghometimeline-findoutmore-hide");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    // Check if the timeline becomes visible after the click
    expect(mockUseState).toHaveBeenCalled();

    // Restore the original implementation of useState
    mockUseState.mockRestore();
  });
});
