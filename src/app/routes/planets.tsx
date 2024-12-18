import { Fragment } from "react";
import { usePlanets } from "../../features/planets/api/get-planets";

function Planets() {
  const { data, increment, decrement, isLoading } = usePlanets();

  return (
    <div
      style={{
        height: "250vh",
      }}
    >
      {isLoading && <div>Loading...</div>}
      {data?.results.map((planet) => (
        <Fragment key={planet.uid}>
          <h2>{planet.name}</h2>
          <p>{planet.uid}</p>
        </Fragment>
      ))}

      <button disabled={!data?.previous} onClick={decrement}>
        previous
      </button>
      <button disabled={!data?.next} onClick={increment}>
        next
      </button>
    </div>
  );
}

export default Planets;
