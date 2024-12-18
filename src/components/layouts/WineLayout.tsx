import { Outlet } from "react-router";
import ErrorBoundary from "../errors-boundaries/ErrorBoundary";

const WineLayout = () => {
  return (
    <div>
      <h1>Wine Layout</h1>
      <ErrorBoundary>
        <Outlet></Outlet>
      </ErrorBoundary>
    </div>
  );
};

export default WineLayout;
