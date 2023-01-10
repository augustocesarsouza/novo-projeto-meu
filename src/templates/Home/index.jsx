import { useEffect } from "react";
import { Heading } from "../../components/Heading";
import { Base } from "../Base";
import { mockBase } from "../Base/mock";
import * as Styled from "./styles";
import { mapData } from "../../api/map-data";

function Home() {
  useEffect(() => {
    const load = async () => {
      const data = await fetch(
        "http://localhost:1337/api/pages/?filters=[slug]=landing-page&populate[sections][populate]=*",
      );
      const json = await data.json();
      const pagesDataArray = Array.isArray(json) ? json : [json];
      const pageData = mapData(pagesDataArray);

      console.log(pageData);
    };

    load();
  }, []);

  return <Base {...mockBase} />;
}

export default Home;
