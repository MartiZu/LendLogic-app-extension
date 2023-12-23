import { render, screen } from "@testing-library/react";
import ExpandChecklist from "../app/dashboard/newbuyer_components/ExpandChecklist";

const mockLinks = [
  "https://www.gov.uk/first-homes-scheme",
  "https://www.gov.uk/stamp-duty-land-tax",
  "https://www.gov.uk/lifetime-isa",
  "https://www.gov.uk/shared-ownership-scheme",
];

test("renders checklist links", () => {
  render(<ExpandChecklist />);

  // Replace the href values with the actual URLs you expect

  expect(screen.getByText("How to Buy Guide")).toHaveAttribute(
    "href",
    "https://www.gov.uk/government/publications/how-to-buy-a-home/how-to-buy"
  );
});
