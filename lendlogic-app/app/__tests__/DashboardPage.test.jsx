import { render, screen } from "@testing-library/react";
import Dashboard from "../dashboard/page";

//used to prerender a component that is async
async function resolvedComponent(Component, props) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}

// Mock the readCookie function
jest.mock("next/headers", () => ({
  cookies: jest.fn(() => ({
    get: jest.fn().mockReturnValue({ value: "a2" }),
  })),
}));

//Mock the DisplayUser custom hook
jest.mock("../app/customHooks/DisplayUser", () =>
  jest.fn().mockResolvedValue({ userName: "John" })
);

//Mock the DisplayProperties custom hook
jest.mock("../app/customHooks/DisplayProperties", () =>
  jest.fn().mockResolvedValue([])
);

//Mock the DisplaySteps custom hook
jest.mock("../app/customHooks/DisplaySteps", () =>
  jest.fn().mockResolvedValue([])
);

jest.mock("../app/customHooks/displayRemortgageSteps", () =>
  jest.fn().mockResolvedValue([])
);

describe("DashboardPage", () => {
  it("renders the dashboard page correctly", async () => {
    //Prerender the dashboard as its an async function
    const DashboardResolved = await resolvedComponent(Dashboard);
    render(<DashboardResolved />);

    // Assert that the page content is rendered correctly
    expect(await screen.findByText("We've got your back!")).toBeInTheDocument();
    expect(
      await screen.findByText(
        "Welcome John, here is everything you need to know"
      )
    ).toBeInTheDocument();
    expect(screen.getByAltText("Back icon")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();
    expect(screen.getByText("Sign up for our newsletter")).toBeInTheDocument();
    expect(screen.getByText("Your Remortgage Report")).toBeInTheDocument();
    expect(screen.getByText("Getting ready to remortgage")).toBeInTheDocument();
  });
});
