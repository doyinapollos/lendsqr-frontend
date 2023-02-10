import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./url";
import { ReactComponent as LoadingIcon } from "./assets/svg/loading-icon.svg";
import Login from "./pages/Login";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

function Routers() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center mt-60 z-50">
            <LoadingIcon className="suspense-loading-icon" />
          </div>
        }
      >
        <Routes>
          <Route path={NonAuthRoutes.login} element={<Login />} />
          <Route path={AuthRoutes.dashboard} element={<Dashboard />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Routers;
