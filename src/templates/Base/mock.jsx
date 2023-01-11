import linksMock from "../../components/NavLinks/mock";

// eslint-disable-next-line import/no-anonymous-default-export

import gridMock from "../../components/GridText/mock";
import { GridText } from "../../components/GridText";

export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: "Logo",
    link: "#",
  },
  footerHtml: "<p>Teste de footer</p>",
};
