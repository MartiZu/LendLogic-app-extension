import { describe } from "node:test";
import displayUser from "./DisplayUser";
import getUsers from "../../library/getUsers";

const mockData = [
  {
    name: "Jenny",
    email: "jenny.smith@example.com",
    salary: "40000",
    property_value: "200000",
    address: {
      postcode: "SW1A 1AA",
    },
    credit_score: 750,
    mortgage: {
      type: "Fixed Rate",
      monthly_payment: "800",
      outstanding_balance: "150000",
      interest_rate: "3.5",
      term_years: 10,
    },
  },
];

jest.mock("../../library/getUsers");

describe("DisplayUser", () => {
  it("check output salary", async () => {
    getUsers.mockResolvedValue(mockData);
    const result = await displayUser("jenny.smith@example.com");
    expect(result.salary).toEqual("40000");
  });
});
