import getUsers from "./getUsers";
import { describe } from "node:test";


const mockUsers = ["user1", "user2"]
global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(mockUsers)
  }));
  
  describe('getUsers function', () => {
    let users;
  
    describe('When getUsers is called', () => {
      beforeEach(async () => {
        users = await getUsers();
      });
  
      it('Then the correct users should be returned', () => {
        expect(users).toEqual(mockUsers);
      });
    });
  });