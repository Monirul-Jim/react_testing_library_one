import { render, screen } from "@testing-library/react";
import PrimaryButton from "../components/PrimaryButton";
describe("PrimaryButton()", () => {
  it("it should render correctly", () => {
    render(<PrimaryButton />);
    const element = screen.getByText("Click to Add");
    expect(element).toBeInTheDocument();
  });
  it("it should render correctly with action type if provided", () => {
    const actionType = "Post";
    render(<PrimaryButton actionType={actionType} />);
    const element = screen.getByText("Click to " + actionType);
    expect(element).toBeInTheDocument();
  });
});
