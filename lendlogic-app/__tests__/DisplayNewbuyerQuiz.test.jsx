import displayNewbuyerQuiz from "../app/customHooks/DisplayNewbuyerQuiz";
import getNewbuyerQuiz from "../library/getNewbuyerQuiz";

const mockData = [
  {
    questions: [
      {
        question: "What is the capital of France?",
        options: ["New York", "London", "Paris", "Dublin"],
        correct_answer: "Paris",
      },
      {
        question: "Who is CEO of Tesla?",
        options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
        correct_answer: "Elon Musk",
      },
    ],
  },
];

jest.mock("../library/getNewbuyerQuiz");

describe("DisplayNewbuyerQuiz", () => {
  it("check output quiz", async () => {
    getNewbuyerQuiz.mockResolvedValueOnce(mockData);
    const result = await displayNewbuyerQuiz();
    expect(result.NBquiz[0].individualTask[0].question).toBe(
      "What is the capital of France?"
    );
    expect(result.NBquiz[0].individualTask[0].answers[2]).toBe("Paris");
  });
});
