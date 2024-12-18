import { useMutation, useQueryClient } from "@tanstack/react-query";
import httpClient from "../../../lib/http-client";
import { Wine, wineKey } from "./get-wines";

const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const deleteWine = async (id: string) => {
  await waitFor(2000);
  //throw new Error("Failed to delete wine");
  await httpClient.delete("/wines/" + id);
};

export const useDeleteWineMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteWine,
    onMutate: async (id: string) => {
      //optimistic update
      const oldCache = queryClient.getQueryData(wineKey);

      queryClient.setQueryData(wineKey, (prev: Wine[]) => {
        return prev?.filter((wine) => wine._id !== id);
      });

      return { oldCache };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: wineKey,
      });
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData(wineKey, context?.oldCache);
    },
  });

  return mutation;
};
