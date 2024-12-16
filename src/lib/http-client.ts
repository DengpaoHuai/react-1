import axios from "axios";
import { useWineStore } from "../store/useWine";

const httpClient = axios.create({
  baseURL: "https://crudcrud.com/api/fb5ca49fa29e4e2886e6eaab91aa4cf4",
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
