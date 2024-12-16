import { Link, useLoaderData } from "react-router";
import { Wine } from "../../../schemas/wine.schema";
import { useWineStore } from "../../../store/useWine";

const List = () => {
  //const wines = useLoaderData<Wine[]>();
  const wines = useWineStore((state) => state.wines);

  useWineStore.subscribe((state) => {
    console.log("state");
    console.log(state);
  });

  return (
    <div>
      <h1>Wines</h1>
      <Link to="/wines/create">Create</Link>
      {wines?.map((wine) => (
        <div key={wine._id}>
          <h2>{wine.name}</h2>
          <p>{wine.region}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
