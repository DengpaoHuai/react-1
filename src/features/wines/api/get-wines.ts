import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import httpClient from "../../../lib/http-client";
import { z } from "zod";

export const wineSchema = z.object({
  name: z.string().min(2).max(15),
  region: z.string().min(2).max(15),
});

export type Wine = z.infer<typeof wineSchema> & { _id: string };

const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const getWines = async () => {
  //  await waitFor(2000);
  const response = await httpClient.get("/wines");
  return response.data;
};

export const wineKey = ["wines"];

export const wineQueryOptions = {
  queryKey: wineKey,
  queryFn: getWines,
};

export const useWines = () => {
  const wines = useSuspenseQuery<Wine[]>(wineQueryOptions);

  return wines;
};
