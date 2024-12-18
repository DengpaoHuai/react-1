import { createBrowserRouter, RouterProvider } from "react-router";
import Planets from "./routes/planets";
import Home from "./routes/home";
import { Suspense, useMemo } from "react";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import List from "./routes/wines/list";
import Create from "./routes/wines/create";
import Update, { getWinesLoader } from "./routes/wines/update";
import WineLayout from "../components/layouts/WineLayout";

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
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
      element: <WineLayout></WineLayout>,
      ErrorBoundary: ({ error }) => {
        return <div>Error: {error.message}</div>;
      },
      children: [
        {
          path: "list",
          loader: async () => {
            /* try {
                  const data = await getWines();
                  useWineStore.setState({ wines: data });
                  return true;
                } catch (err: unknown) {
                  console.error(err);
                  return redirect("/wines/404");
                }*/
          },
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
          loader: (params) => getWinesLoader({ queryClient }),
          path: "update/:id",
          element: <Update></Update>,
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
