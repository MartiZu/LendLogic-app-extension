import { describe } from "node:test";
import GetProperties from "./DisplayProperties";
import getProperties from "../../library/getProperties";

const mockData = [
    {
        postcode: "SW1A 1AA",
        value: "200000",
      },
      {
        postcode: "SW1A 1AA",
        value: "200000",
      },
    ];

jest.mock("../../library/getProperties");

describe("DisplayProperties", () => {
    it("check output postcode", async () => {
        getProperties.mockResolvedValue(mockData);
        const result = await GetProperties();
        expect(result.property[0].searchValue).toBe("200000");
    });
});