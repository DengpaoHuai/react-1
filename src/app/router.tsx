import { createBrowserRouter } from "react-router";
import Planets from "./routes/planets";
import Home from "./routes/home";
import Create from "./routes/wines/create";
import List from "./routes/wines/list";

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
        element: <List></List>,
      },
      {
        path: "create",
        element: <Create></Create>,
      },
    ],
  },
]);

export default router;
