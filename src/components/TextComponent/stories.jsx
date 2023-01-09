import { TextComponent } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi consectetur a natus velit beatae in et eveniet ipsa perspiciatis totam earum ut aliquid, vitae eum incidunt nihil maxime debitis!`,
  },
  argTypes: {
    children: { type: "string" },
  },
};
export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
