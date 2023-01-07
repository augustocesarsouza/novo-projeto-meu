import { Menu } from ".";

import linksMock from "../NavLinks/mock";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Menu",
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: "Logo",
      link: "#target",
      srcImg: "",
    },
  },
};
export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
