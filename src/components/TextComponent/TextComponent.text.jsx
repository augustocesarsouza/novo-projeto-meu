import { screen } from "@storybook/testing-library";
import { render } from "react-dom";
import { TextComponent } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<TextComponent />", () => {
  it("should render", () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("renders correctly with provied props", () => {
    const { getByText } = render(<TextComponent>Lorem ipsum dolor sit amet</TextComponent>);
    expect(getByText("Lorem ipsum dolor st amet")).toBeTruthy();
  });
});
