import { RouterProvider } from "react-router";
import router, { AppRouter } from "./router";
import { Provider } from "react-redux";
import store from "../store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactSnackBarProvider } from "../components/ui/ReactSnackBar";
import { ReactModalProvider } from "../components/ui/ReactModal";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
});

const App = () => {
  return (
    <>
      <ReactModalProvider>
        <ReactSnackBarProvider>
          <QueryClientProvider client={queryClient}>
            <AppRouter></AppRouter>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ReactSnackBarProvider>
      </ReactModalProvider>
    </>
  );
};

export default App;
