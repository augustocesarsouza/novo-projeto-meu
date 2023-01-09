import { screen } from "@storybook/testing-library";
import { Base } from ".";
import { renderTheme } from "../../styles/render-theme";
import { mockBase } from "./mock";

describe("<Base />", () => {
  it("should render", () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});
