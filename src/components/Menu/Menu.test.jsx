import { screen } from "@storybook/testing-library";
import { Menu } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<Menu />", () => {
  it("should render", () => {
    renderTheme(<Menu>Children</Menu>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
