import getUsers from "../library/getUsers";
import { describe } from "node:test";

const mockUsers = ["user1", "user2"];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockUsers),
  })
);

describe("getUsers", () => {
  it("fetches successfully data from an API", async () => {
    // Arrange
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
    });

    // Act
    const result = await getUsers();

    // Assert
    expect(result).toEqual(mockUsers);
  });
  it("should call fetch and return the correct data", () => {
    // Assert
    expect(global.fetch).toHaveBeenCalled();
    expect(users).toEqual(mockUsers);
  });
});

// describe('getUsers', () => {

//   let expectedData = mockUsers[0];
//   let result = getUsers();

//   //Test that the fetch is working
//   it('should call fetch', async () => {
//     getUsers();
//     expect(result).toHaveBeenCalled(expectedData);
//   });

//   describe('When getUsers is called', () => {
//     beforeEach(async () => {
//       users = await getUsers();
//     });

//     it('Then the correct users should be returned', () => {
//       expect(users).toEqual(mockUsers);
//     });
//   });
// });
