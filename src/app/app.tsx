import { RouterProvider } from "react-router";
import router from "./router";
import { Provider } from "react-redux";
import store from "../store/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
};

export default App;
