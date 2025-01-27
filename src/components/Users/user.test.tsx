import { render, screen } from "@testing-library/react";
import Users from "./Users";
it("should render the component", () => {
  render(<Users />);
  const element = screen.getByRole("textbox", {
    name: "Name:",
  });

  const headingElement = screen.getByRole("heading", {
    level: 2,
  });
  expect(element).toBeInTheDocument();
  expect(headingElement).toBeInTheDocument();
});
