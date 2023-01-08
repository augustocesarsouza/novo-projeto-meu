import { screen } from "@storybook/testing-library";
import { GridSection } from ".";
import { renderTheme } from "../../styles/render-theme";

import mock from "./mock";

describe("<GridSection />", () => {
  it("should render", () => {
    const { container } = renderTheme(<GridSection {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
