import { useLoaderData, useNavigate, useParams } from "react-router";
import { Wine } from "../../../schemas/wine.schema";
import WineForm from "../../../features/wines/components/wine-form";
import {
  getWines,
  useWines,
  wineQueryOptions,
} from "../../../features/wines/api/get-wines";
import { useWineStore } from "../../../store/useWine";
import { updateWine } from "../../../features/wines/api/update-wine";
import { QueryClient } from "@tanstack/react-query";

export const getWinesLoader = async ({
  queryClient,
}: {
  queryClient: QueryClient;
}) => {
  await queryClient.prefetchQuery(wineQueryOptions);

  return true;
};

const Update = () => {
  const navigate = useNavigate();
  const { data } = useWines();
  const { id } = useParams<{ id: string }>();
  const currentWine = data?.find((wine) => wine._id === id);

  const onSubmit = (data: Omit<Wine, "_id">) => {
    updateWine(data, id).then((response) => {
      console.log(response);
      navigate("/wines/list");
    });
  };

  return (
    <WineForm
      onSubmit={onSubmit}
      defaultValues={
        currentWine && {
          name: currentWine?.name,
          region: currentWine?.region,
        }
      }
    />
  );
};

export default Update;
