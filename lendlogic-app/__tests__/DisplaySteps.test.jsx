import { describe } from "node:test";
import displaySteps from "../app/customHooks/DisplaySteps";

const mockData = [
  {
    title: "Chores",
    tasks: ["Mow the lawn", "Do the dishes"],
  },
  {
    title: "Fun things",
    tasks: ["Meet with friends", "Eat good food"],
  },
];

jest.mock("../library/getSteps");

describe("DisplaySteps", () => {
  it("check output steps", async () => {
    getSteps.mockResolvedValueOnce(mockData);
    const result = await displaySteps();
    expect(result.steps[0].title).toBe("Chores");
    expect(result.steps[1].tasks[1]).toBe("Eat good food");
    const secondResult = await displaySteps();
    expect(secondResult.props).toHaveProperty("steps", []);
  });
});
