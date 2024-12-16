import { Fragment, useState } from "react";
import usePromised from "../../hooks/usePromised";

type Planet = {
  name: string;
  uid: number;
  url: string;
};

type PlanetResponse = {
  results: Planet[];
  next: string | null;
  previous: string | null;
  total_records: number;
};

const getData = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

function Planets() {
  const [page, setPage] = useState("https://www.swapi.tech/api/planets");
  const { data } = usePromised<PlanetResponse>({
    fn: () => getData(page),
    key: page,
  });

  return (
    <div
      style={{
        height: "250vh",
      }}
    >
      {data?.results.map((planet) => (
        <Fragment key={planet.uid}>
          <h2>{planet.name}</h2>
          <p>{planet.uid}</p>
        </Fragment>
      ))}

      <button
        disabled={!data?.previous}
        onClick={() => data?.previous && setPage(data?.previous)}
      >
        previous
      </button>
      <button
        disabled={!data?.next}
        onClick={() => data?.next && setPage(data?.next)}
      >
        next
      </button>
    </div>
  );
}

export default Planets;
