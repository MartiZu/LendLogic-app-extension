import getRemortgageSteps from "../../library/getRemortgageSteps";

const mockSteps = [
  { id: 1, title: "Step 1", tasks: ["Task 1", "Task 2"] },
  { id: 2, title: "Step 2", tasks: ["Task 3", "Task 4"] },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockSteps),
  })
);

describe("getRemortgageSteps", () => {
  it("fetches successfully data from an API", async () => {
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => mockSteps,
    });

    const result = await getRemortgageSteps();

    expect(result).toEqual(mockSteps);
  });
});
