import { Suspense } from "react";
import Create from "./create";
import List from "./list";
import Update, { getWinesLoader } from "./update";

const routes = [
  {
    path: "list",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <List></List>
      </Suspense>
    ),
  },
  {
    path: "create",
    element: <Create></Create>,
  },
  {
    loader: getWinesLoader,
    path: "update/:id",
    element: <Update></Update>,
  },
];

export default routes;
