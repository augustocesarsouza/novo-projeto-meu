import { GridTwoColumn } from ".";
import mock from "./mock";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "GridTwoColumn",
  component: GridTwoColumn,
  args: mock,
  argTypes: {
    children: { type: "string" },
  },
};
export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
