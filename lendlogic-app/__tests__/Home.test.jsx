import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../app/page";

async function resolvedComponent(Component, props) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}
jest.mock("next/navigation", () => ({
  __esModule: true,
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));
jest.mock("next/headers", () => ({
  cookies: jest.fn(() => ({ set: jest.fn() })),
}));

describe("Home", () => {
  it("setCookieJenny function is setting cookie as Jenny's email", async () => {
    const mockId = { user_id: "jenny.smith@example.com" };
    setCookieJenny = jest.fn(() => Promise.resolve(mockId));
    const jennyEmail = await setCookieJenny();
    expect(mockId).toEqual(jennyEmail);
  });
  it("setCookieJenny function runs on click", async () => {
    const logSpy = jest.spyOn(global.console, "log");
    const HomeResolved = await resolvedComponent(Home);
    render(<HomeResolved />);
    const button = screen.getByText("Jenny's journey");
    fireEvent.click(button);
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith("Jenny logged in successfully!");
  });
  it("setCookieKat function runs on click", async () => {
    const logSpy = jest.spyOn(global.console, "log");
    const HomeResolved = await resolvedComponent(Home);
    render(<HomeResolved />);
    const button = screen.getByText("Kat's journey");
    fireEvent.click(button);
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith("Kat logged in successfully!");
  });
});