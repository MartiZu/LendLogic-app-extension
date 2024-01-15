import displayRemortgageSteps from "../customHooks/DisplayRemortgageSteps";
import getRemortgageSteps from "../../library/getRemortgageSteps";

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

jest.mock("../library/getRemortgageSteps");

describe("DisplaySteps", () => {
  it("check output steps", async () => {
    getRemortgageSteps.mockResolvedValueOnce(mockData);
    const result = await displayRemortgageSteps();
    expect(result.remortgageSteps[0].title).toBe("Chores");
    expect(result.remortgageSteps[1].tasks[1]).toBe("Eat good food");
    const secondResult = await displayRemortgageSteps();
    expect(secondResult.props).toHaveProperty("remortgageSteps", []);
  });
});
