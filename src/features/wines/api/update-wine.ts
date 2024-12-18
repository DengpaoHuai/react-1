import httpClient from "../../../lib/http-client";
import { Wine } from "./get-wines";

export const updateWine = async (wine: Omit<Wine, "_id">, id: string) => {
  const response = await httpClient.put("/wines/" + id, wine);
  return {
    ...wine,
    _id: response.data._id,
  };
};
