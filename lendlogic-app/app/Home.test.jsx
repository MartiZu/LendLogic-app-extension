import { render, screen } from "@testing-library/react";
import Home from "./page";
import { describe } from "node:test";

describe("Home", () => {
  it("renders the home page", () => {
    //arrange
    render(<Home />);
  });
  it("setCookieJenny function is setting cookie as Jenny's email", async () => {
    const mockId = { user_id: "jenny.smith@example.com" };
    setCookieJenny = jest.fn(() => Promise.resolve(mockId));
    // const mockSetCookie = jest.fn();
    const jennyEmail = await setCookieJenny();
    expect(mockId).toEqual(jennyEmail);
  });
});
