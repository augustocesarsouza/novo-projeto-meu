import { GridSection } from ".";
import mock from "./mock";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "GridSection",
  component: GridSection,
  args: mock,
};
export const Template = (args) => {
  return (
    <div>
      <GridSection {...args} />
    </div>
  );
};
