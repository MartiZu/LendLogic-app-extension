import { render, screen, fireEvent } from "@testing-library/react";
//userEvent is an alternative to fireEvent
import { describe, it } from "node:test";
import PreferenceTool from "./PreferenceTool";
import { useState } from "react";
import { useRouter } from "next/navigation";

describe("PreferenceTool", () => {
  it("renders the PreferenceTool page", () => {
    //arrange
    render(<PreferenceTool />);
  });
});
