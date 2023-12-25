import { render, screen, fireEvent } from "@testing-library/react";
import RemortgageHomeTimeline from "../app/dashboard/remortgage_components/RemortgageHomeTimeline";
import React from 'react';  
import { useState } from 'react';

const mockSteps = {
  remortgageSteps: [
    { id: 1, title: "Step 1", tasks: ["Task 1", "Task 2"] },
    { id: 2, title: "Step 2", tasks: ["Task 3", "Task 4"] },
  ],
};

describe("RemortgageHomeTimeline component", () => {
  it("timeline visible based on button click", () => {
    render(<RemortgageHomeTimeline steps={mockSteps} />);
    const mockUseState = jest.spyOn(React, 'useState');
    mockUseState.mockImplementation((initialState) => [initialState, jest.fn()]);
    // Click the button to open timeline
    const button = screen.getByTestId(
      "RemortgageHomeTimeline-findoutmore-hide"
    );
    expect(button).toBeInTheDocument();
    // const button = screen.getByText("Find Out More");
    fireEvent.click(button);

    // Check if the timeline becomes visible after the click
    expect(mockUseState).toHaveBeenCalled();
    mockUseState.mockRestore();
  });
});
