import httpClient from "../lib/http-client";
import { Wine } from "../schemas/wine.schema";

export const createWine = async (wine: Omit<Wine, "_id">) => {
  const response = await httpClient.post("/wines", wine);
  return response.data;
};

export const getWines = async (): Promise<Wine[]> => {
  const response = await httpClient.get("/wines");
  return response.data;
};
