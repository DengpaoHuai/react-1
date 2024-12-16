import { Fragment, useEffect, useState } from "react";
import "./App.css";

type Planet = {
  name: string;
  uid: number;
  url: string;
};

function App() {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets").then((response) =>
      response.json().then((data) => {
        setPlanets(data.results);
      })
    );
  }, []);

  return (
    <>
      {planets.map((planet) => (
        <Fragment key={planet.uid}>
          <h2>{planet.name}</h2>
          <p>{planet.uid}</p>
        </Fragment>
      ))}
      <button>previous</button>
      <button>next</button>
    </>
  );
}

export default App;
