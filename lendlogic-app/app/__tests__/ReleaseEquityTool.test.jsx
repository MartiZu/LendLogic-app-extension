import { render, screen, fireEvent } from "@testing-library/react";
import ReleaseEquityTool from "../dashboard/remortgage_components/ReleaseEquityTool";

const updateMonthlyPaymentMock = jest.fn();
const mockValue = {
  loanLength: 30,
  loanAmount: 100000,
  userMonthlyPayment: 1500,
  userInterestRate: 3.5,
};

describe("ReleaseEquityTool", () => {
  it("renders the component with initial values", () => {
    render(<ReleaseEquityTool value={mockValue} />);

    expect(screen.getByTestId("textValue")).toBeInTheDocument();
  });

  it("updates equity and monthly payment when adjusting the borrowing amount", () => {
    render(<ReleaseEquityTool value={mockValue} />);

    const equityInput = screen.getByTestId("equityValue");
    fireEvent.change(equityInput, { target: { value: 150000 } });

    expect(screen.getByTestId("equitySpan")).toBeInTheDocument();
  });
  // it("calls updateMonthlyPayment with correct arguments when adjusting borrowing amount", () => {
  //   // Arrange

  //   render(
  //     <ReleaseEquityTool
  //       value={mockValue}
  //       updateMonthlyPayment={updateMonthlyPaymentMock}
  //     />
  //   );
  //   const borrowTime = 15;
  //   // Act
  //   fireEvent.change(screen.getByTestId("borrowTime"), {
  //     target: { value: borrowTime },
  //   });
  //   // Assert
  //   expect(updateMonthlyPaymentMock).toHaveBeenCalled();
  // });
});
