import { screen } from "@storybook/testing-library";
import { LogoLink } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<LogoLink />", () => {
  it("should render", () => {
    renderTheme(<LogoLink>Children</LogoLink>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
