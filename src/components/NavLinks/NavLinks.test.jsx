import { screen } from "@storybook/testing-library";
import { NavLinks } from ".";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";

import mock from "./mock";

describe("<NavLinks />", () => {
  it("should render links", () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole("link")).toHaveLength(mock.length);
  });

  it("should not render links", () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it("should render links", () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule("flex-wrap", "column wrap", {
      media: theme.media.lteMedium,
    });
  });

  it("should match snapshot", () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole("link")).toMatchSnapshot();
  });
});
