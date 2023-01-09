import { Base } from ".";

import mock, { mockBase } from "./mock";
// import { GridText } from "../../components/GridText";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Templates/Base",
  component: Base,
  args: mockBase,
};
export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
