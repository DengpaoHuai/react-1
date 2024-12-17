import { createBrowserRouter, redirect } from "react-router";
import Planets from "./routes/planets";
import Home from "./routes/home";
import Create from "./routes/wines/create";
import List from "./routes/wines/list";
import { getWines } from "../services/wine.service";
import { useWineStore } from "../store/useWine";

const router = createBrowserRouter([
  {
    path: "/planets",
    element: <Planets></Planets>,
  },
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/wines",
    children: [
      {
        path: "list",
        loader: async () => {
          try {
            const data = await getWines();
            useWineStore.setState({ wines: data });
            return true;
          } catch (err: unknown) {
            console.error(err);
            return redirect("/wines/404");
          }
        },
        element: <List></List>,
      },
      {
        path: "create",
        element: <Create></Create>,
      },
      {
        path: "update/:id",
        element: <Create></Create>,
      },
    ],
  },
]);

export default router;
