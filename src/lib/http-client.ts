import axios from "axios";
import { useWineStore } from "../store/useWine";

const httpClient = axios.create({
  baseURL: "https://crudcrud.com/api/3a89573ac414415185aa59afd17594c5",
});

httpClient.interceptors.request.use((config) => {
  const store = useWineStore.getState();
  console.log("store");
  console.log(store);
  return config;
});

httpClient.interceptors.response.use(
  (succ) => {
    const store = useWineStore.getState();
    console.log("store");
    console.log(store);
    return succ;
  },
  (err) => {
    const { response } = err;

    if (response.status === 404) {
      console.log("404");
      return Promise.reject(err);
    }

    if (response.status === 500) {
      console.log("500");
      return Promise.reject(err);
    }

    if (response.status === 401) {
      console.log("401");
    }
  }
);

export default httpClient;
