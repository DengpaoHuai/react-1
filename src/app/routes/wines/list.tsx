import { Link } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import {
  useWines,
  wineQueryOptions,
} from "../../../features/wines/api/get-wines";
import { useDeleteWineMutation } from "../../../features/wines/api/delete-wine";
import { useSnackBar } from "../../../components/ui/ReactSnackBar";

const List = () => {
  // const demo = useSuspenseQuery(wineQueryOptions);
  //const wines = useLoaderData<Wine[]>();
  //const wines = useWineStore((state) => state.wines);
  const { data: wines } = useWines();
  const queryClient = useQueryClient();
  const mutation = useDeleteWineMutation();
  const { show } = useSnackBar();

  return (
    <div>
      <h1>Wines</h1>
      <button onClick={() => show("Hello", "demo", 2000)}>Show</button>
      <Link to="/wines/create">Create</Link>
      {wines?.map((wine) => (
        <div key={wine._id}>
          <h2>{wine.name}</h2>
          <p>{wine.region}</p>
          <Link
            onMouseEnter={() => {
              queryClient.prefetchQuery(wineQueryOptions);
            }}
            to={`/wines/update/${wine._id}`}
          >
            Update
          </Link>
          <button
            onClick={() => {
              mutation.mutate(wine._id);
            }}
          >
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
