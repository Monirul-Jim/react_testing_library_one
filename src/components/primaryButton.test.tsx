import { render, screen } from "@testing-library/react";
import PrimaryButton from "./PrimaryButton";
describe("PrimaryButton()", () => {
  it("it should render correctly", () => {
    render(<PrimaryButton />);
    const element = screen.getByText("Click to Add");
    expect(element).toBeInTheDocument();
  });
});
