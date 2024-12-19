import { Suspense, FC } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

interface RouteConfig {
  path: string;
  element: JSX.Element;
  key: string;
  children?: RouteConfig[];
}

const renderRoutes = (routes: RouteConfig[]) => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route key={route.key} path={route.path} element={route.element}>
          {renderRoutes(route.children)}
        </Route>
      );
    }
    return <Route key={route.key} path={route.path} element={route.element} />;
  });
};

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>{renderRoutes(routes)}</Routes>
    </Suspense>
  );
};

export default AppRouter;
