import { createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../lib/http-client";

export const setAllWines = createAsyncThunk("get/wines", async () => {
  const response = await httpClient.get("/wines");
  return response.data;
});
