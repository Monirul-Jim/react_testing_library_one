import { logRoles, render, screen, within } from "@testing-library/react";
import UserTable from "./UserTable";
import { users } from "../../App";
describe("UserTable()", () => {
  it("should render a welcome message", async () => {
    const { container } = render(<UserTable users={users} />);
    logRoles(container);
    // const welcomeMessage = await screen.findByTestId(
    //   "welcome",
    //   {},
    //   {
    //     timeout: 2000,
    //   }
    // );
    // expect(welcomeMessage).toBeInTheDocument();
    // screen.logTestingPlaygroundURL();
    // const rows = screen.getAllByRole("row");
    const rows = within(screen.getByTestId("users")).getAllByRole("row");
    expect(rows).toHaveLength(3);
  });
});
