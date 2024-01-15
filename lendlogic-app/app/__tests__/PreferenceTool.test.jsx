import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PreferenceTool from "../questionnaire/PreferenceTool";

// Mock the useRouter hook from next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

describe("PreferenceTool component", () => {
  test("PreferenceTool component going through a1, a1 path", async () => {
    const cookieHandlerMock = jest.fn();
    render(<PreferenceTool cookieHandler={cookieHandlerMock} />);
    // Initial render assertions
    const questionOne = await screen.findByText(
      "Which of the following best describes you?"
    );
    expect(questionOne).toBeInTheDocument();
    // Click on a button and check if it triggers the expected behavior
    const answerRemortgage = await screen.findByText("New Buyer");
    fireEvent.click(answerRemortgage);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q1", "a1");
    // Ensure that the component updates after click action
    const questionTwo = await screen.findByText(
      "How comfortable are you with mortgage terminology?"
    );
    expect(questionTwo).toBeInTheDocument();
    const answerOptions = await screen.findByText("I'm comfortable");
    fireEvent.click(answerOptions);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q2", "a1");
  });
  test("renders PreferenceTool component going through a1, a2 path", async () => {
    const cookieHandlerMock = jest.fn();
    render(<PreferenceTool cookieHandler={cookieHandlerMock} />);
    // Initial render assertions
    const questionOne = await screen.findByText(
      "Which of the following best describes you?"
    );
    expect(questionOne).toBeInTheDocument();
    // Click on a button and check if it triggers the expected behavior
    const answerRemortgage = await screen.findByText("New Buyer");
    fireEvent.click(answerRemortgage);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q1", "a1");
    // Ensure that the component updates after click action
    const questionTwo = await screen.findByText(
      "How comfortable are you with mortgage terminology?"
    );
    expect(questionTwo).toBeInTheDocument();
    const answerOptions = await screen.findByText("I'm not comfortable");
    fireEvent.click(answerOptions);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q2", "a2");
  });
  test("renders PreferenceTool component going through a2, a1 path", async () => {
    const cookieHandlerMock = jest.fn();
    render(<PreferenceTool cookieHandler={cookieHandlerMock} />);
    // Initial render assertions
    const questionOne = await screen.findByText(
      "Which of the following best describes you?"
    );
    expect(questionOne).toBeInTheDocument();
    // Click on a button and check if it triggers the expected behavior
    const answerRemortgage = await screen.findByText("Remortgage");
    fireEvent.click(answerRemortgage);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q1", "a2");
    // Ensure that the component updates after click action
    const questionTwo = await screen.findByText(
      "What are your Remortgage goals?"
    );
    expect(questionTwo).toBeInTheDocument();
    const answerOptions = await screen.findByText(
      "Repay your mortgage quicker"
    );
    fireEvent.click(answerOptions);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q2", "a1");
  });
  test("renders PreferenceTool component going through a2, a2 path", async () => {
    const cookieHandlerMock = jest.fn();
    render(<PreferenceTool cookieHandler={cookieHandlerMock} />);
    // Initial render assertions
    const questionOne = await screen.findByText(
      "Which of the following best describes you?"
    );
    expect(questionOne).toBeInTheDocument();
    // Click on a button and check if it triggers the expected behavior
    const answerRemortgage = await screen.findByText("Remortgage");
    fireEvent.click(answerRemortgage);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q1", "a2");
    // Ensure that the component updates after click action
    const questionTwo = await screen.findByText(
      "What are your Remortgage goals?"
    );
    expect(questionTwo).toBeInTheDocument();
    const answerOptions = await screen.findByText(
      "Reduce your monthly payments"
    );
    fireEvent.click(answerOptions);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q2", "a2");
  });
  test("renders PreferenceTool component going through a2, a3 path", async () => {
    const cookieHandlerMock = jest.fn();
    render(<PreferenceTool cookieHandler={cookieHandlerMock} />);
    // Initial render assertions
    const questionOne = await screen.findByText(
      "Which of the following best describes you?"
    );
    expect(questionOne).toBeInTheDocument();
    // Click on a button and check if it triggers the expected behavior
    const answerRemortgage = await screen.findByText("Remortgage");
    fireEvent.click(answerRemortgage);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q1", "a2");
    // Ensure that the component updates after click action
    const questionTwo = await screen.findByText(
      "What are your Remortgage goals?"
    );
    expect(questionTwo).toBeInTheDocument();
    const answerOptions = await screen.findByText("Change mortgage type");
    fireEvent.click(answerOptions);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q2", "a3");
  });
  test("renders PreferenceTool component going through a2, a4 path", async () => {
    const cookieHandlerMock = jest.fn();
    render(<PreferenceTool cookieHandler={cookieHandlerMock} />);
    // Initial render assertions
    const questionOne = await screen.findByText(
      "Which of the following best describes you?"
    );
    expect(questionOne).toBeInTheDocument();
    // Click on a button and check if it triggers the expected behavior
    const answerRemortgage = await screen.findByText("Remortgage");
    fireEvent.click(answerRemortgage);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q1", "a2");
    // Ensure that the component updates after click action
    const questionTwo = await screen.findByText(
      "What are your Remortgage goals?"
    );
    expect(questionTwo).toBeInTheDocument();
    const answerOptions = await screen.findByText("Change mortgage type");
    fireEvent.click(answerOptions);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q2", "a3");
  });
  test("renders PreferenceTool component going through a2, a4 path", async () => {
    const cookieHandlerMock = jest.fn();
    render(<PreferenceTool cookieHandler={cookieHandlerMock} />);
    // Initial render assertions
    const questionOne = await screen.findByText(
      "Which of the following best describes you?"
    );
    expect(questionOne).toBeInTheDocument();
    // Click on a button and check if it triggers the expected behavior
    const answerRemortgage = await screen.findByText("Remortgage");
    fireEvent.click(answerRemortgage);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q1", "a2");
    // Ensure that the component updates after click action
    const questionTwo = await screen.findByText(
      "What are your Remortgage goals?"
    );
    expect(questionTwo).toBeInTheDocument();
    const answerOptions = await screen.findByText("Release equity");
    fireEvent.click(answerOptions);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q2", "a4");
  });
  test("renders PreferenceTool component going through a3 path", async () => {
    const cookieHandlerMock = jest.fn();
    render(<PreferenceTool cookieHandler={cookieHandlerMock} />);
    // Initial render assertions
    const questionOne = await screen.findByText(
      "Which of the following best describes you?"
    );
    expect(questionOne).toBeInTheDocument();
    // Click on a button and check if it triggers the expected behavior
    const answerRemortgage = await screen.findByText("Moving House");
    fireEvent.click(answerRemortgage);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q1", "a3");
  });
  test("renders PreferenceTool component going through a4 path", async () => {
    const cookieHandlerMock = jest.fn();
    render(<PreferenceTool cookieHandler={cookieHandlerMock} />);
    // Initial render assertions
    const questionOne = await screen.findByText(
      "Which of the following best describes you?"
    );
    expect(questionOne).toBeInTheDocument();
    // Click on a button and check if it triggers the expected behavior
    const answerRemortgage = await screen.findByText("Just Browsing");
    fireEvent.click(answerRemortgage);
    // // Ensure that cookieHandler is called with the correct arguments
    expect(cookieHandlerMock).toHaveBeenCalledWith("q1", "a4");
  });
  // Additional assertions as needed
});
