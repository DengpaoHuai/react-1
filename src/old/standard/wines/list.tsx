import { useEffect, useState } from "react";
import { getWines } from "../../../services/wine.service";
import { Wine } from "../../../schemas/wine.schema";
import { Link } from "react-router";

const List = () => {
  const [wines, setWines] = useState<Wine[]>([]);

  useEffect(() => {
    getWines().then((data) => setWines(data));
  }, []);

  return (
    <div>
      <h1>Wines</h1>
      <Link to="/wines/create">Create</Link>
      {wines.map((wine) => (
        <div key={wine._id}>
          <h2>{wine.name}</h2>
          <p>{wine.region}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
