import { GridText } from ".";
import mock from "./mock";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "GridText",
  component: GridText,
  args: mock,
};
export const Template = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};
