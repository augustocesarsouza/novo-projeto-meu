import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import * as Styled from "./styles";
import { mapData } from "../../api/map-data";

import { Heading } from "../../components/Heading";
import { GridTwoColumn } from "../../components/GridTwoColumn";
import { GridContent } from "../../components/GridContent";
import { GridText } from "../../components/GridText";
import { GridImage } from "../../components/GridImage";

import { mockBase } from "../Base/mock";
import { Base } from "../Base";
import { PageNotFoud } from "../PageNotFoud";
import { Loadind } from "../Loading";

import config from "../../config";

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, "");
    const slug = pathname ? pathname : "landing-page";

    const load = async () => {
      try {
        const data = await fetch(config.url);
        const json = await data.json();
        console.log(json);
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);

        setData(() => pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && !data.data) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFoud />;
  }

  if (data && !data.slug) {
    return <Loadind />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;
  // console.log(data);

  return (
    <Base links={links} footerHtml={footerHtml} logoData={{ text, link, srcImg }}>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === "section.section-two-columns") {
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === "section.section-content") {
          return <GridContent key={key} {...section} />;
        }

        if (component === "section.section-grid-text") {
          return <GridText key={key} {...section} />;
        }

        if (component === "section.section-grid-image") {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
