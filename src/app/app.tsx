import { RouterProvider } from "react-router";
import router from "./router";
import { Provider } from "react-redux";
import store from "../store/store";

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
