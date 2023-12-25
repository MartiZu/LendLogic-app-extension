import getNewbuyerQuiz from "../library/getNewbuyerQuiz";

const mockQuiz = ["quiz1", "quiz2"];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockQuiz),
  })
);

describe("getNewbuyerQuiz", () => {
  it("data is fetched successfully data from an API", async () => {
    // Arrange
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockQuiz,
    });

    // Act
    const result = await getNewbuyerQuiz();

    // Assert
    expect(result).toEqual(mockQuiz);
  });
});
