import getProperties from "../library/getProperties";

const mockProperties = ["property1", "property2"];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockProperties),
  })
);

describe("getProperties", () => {
  it("data is fetched successfully data from an API", async () => {
    // Arrange
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProperties,
    });

    // Act
    const result = await getProperties();

    // Assert
    expect(result).toEqual(mockProperties);
  });
});
