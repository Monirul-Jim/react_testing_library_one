import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Form from "./Form";
describe("Form()", () => {
  it("Submit the form correctly with user input", async () => {
    user.setup();
    render(<Form onSubmit={(data) => console.log(data)} />);
    const text = "Hello World!";
    const input1 = screen.getByRole("textbox");
    await user.type(input1, text);
    const heading1 = screen.getByRole("heading", { level: 2 });
    expect(heading1).toHaveTextContent(text);
  });
});
