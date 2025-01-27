import { render, screen } from "@testing-library/react";
import Users from "./Users";
it("should render the component", () => {
  render(<Users />);
  const element = screen.getByRole("textbox", {
    name: "Name:",
  });
  const placeholderText = screen.getByPlaceholderText("Enter Your Name...");
  const getByTextShow = screen.getByText("Enter the form data");
  const headingElement = screen.getByRole("heading", {
    level: 2,
  });
  expect(element).toBeInTheDocument();
  expect(placeholderText).toBeInTheDocument();
  expect(getByTextShow).toBeInTheDocument();
  expect(headingElement).toBeInTheDocument();
});
