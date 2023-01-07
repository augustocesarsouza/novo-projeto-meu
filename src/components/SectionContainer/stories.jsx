import { SectionContainer } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "SectionContainer",
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sint corporis voluptatibus totam
          labore modi. Et praesentium cumque ipsa perspiciatis! Odit eos eligendi repellendus blanditiis
          quibusdam at sequi distinctio sit?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: "string" },
  },
};
export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
