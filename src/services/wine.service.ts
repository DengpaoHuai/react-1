import { z } from "zod";
import httpClient from "../lib/http-client";
import { Wine, wineSchema } from "../schemas/wine.schema";

export const createWine = async (wine: Omit<Wine, "_id">) => {
  const response = await httpClient.post("/wines", wine);
  return response.data;
};

const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));

//const schemaWines = z.array(wineSchema);

export const getWines = async (): Promise<Wine[]> => {
  const response = await httpClient.get("/wines");
  //schemaWines.parse(response.data);
  return response.data;
};
