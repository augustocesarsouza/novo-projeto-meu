import { Footer } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Footer",
  component: Footer,
  args: {
    html: `<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda</a></p>`,
  },
};
export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
