import { render, screen, fireEvent } from "@testing-library/react";
import LearningSection from "../app/dashboard/LearningSection";

describe("LearningSection", () => {
  it("looking for heading for LearningSection tool", () => {
    render(<LearningSection />);
    expect(screen.getByText("Getting ready to remortgage")).toBeInTheDocument();
    expect(screen.getByText("Guide")).toBeInTheDocument();
    expect(screen.getByText("See More")).toBeInTheDocument();
  });
});
