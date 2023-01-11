import { useEffect, useState } from "react";
import { Heading } from "../../components/Heading";
import { Base } from "../Base";
import { mockBase } from "../Base/mock";
import * as Styled from "./styles";
import { mapData } from "../../api/map-data";
import { PageNotFoud } from "../PageNotFoud";
import { Loadind } from "../Loading";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          "http://localhost:1337/api/pages/?filters[slug]=olha-so-a-minha-pagina&populate[sections][populate]=*&populate[menu][populate]=*",
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);

        await new Promise((r) => {
          return setTimeout(() => {
            setData(() => pageData[0]);
            r();
          }, 100000);
        });
      } catch (e) {
        setData(undefined);
      }
    };

    load();
  }, []);

  if (data === undefined) {
    return <PageNotFoud />;
  }

  if (data && !data.slug) {
    return <Loadind />;
  }

  return <Base {...mockBase} />;
}

export default Home;
