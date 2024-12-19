import { Suspense, FC } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

/**
 * RouteConfig Interface
 *
 * This interface defines the structure of a single route in the application.
 *
 * Properties:
 * - `path` (string): The URL path for the route.
 * - `element` (JSX.Element): The React component rendered for the route.
 * - `key` (string): A unique identifier for the route, used as the `key` prop in React.
 * - `children` (optional, RouteConfig[]): Array of nested routes under the current route.
 *
 * Note:
 * If a route has children, the parent route must render the `<Outlet />` component
 * for displaying the child routes.
 */
interface RouteConfig {
  path: string;
  element: JSX.Element;
  key: string;
  children?: RouteConfig[];
}

/**
 * RenderRoutes Function
 *
 * Recursively generates React Router `<Route>` components from the provided `routes` array.
 *
 * Parameters:
 * - `routes` (RouteConfig[]): An array of route configuration objects.
 *
 * Returns:
 * - A list of `<Route>` components, rendered either as parent routes or child routes (nested).
 *
 * Behavior:
 * - If the route has a `children` property, the function is called recursively
 *   to render child routes nested under the parent route.
 */
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

/**
 * AppRouter Component
 *
 * This component is responsible for rendering the application's routing structure.
 *
 * It wraps the `Routes` component with a `Suspense` component to handle lazy-loaded
 * components and provide a fallback UI while they are being loaded.
 *
 * Note:
 * - The `routes` configuration is imported from an external file (`routes.tsx`).
 * - Lazy-loaded components use React's `React.lazy` for code-splitting.
 */
const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>{renderRoutes(routes)}</Routes>
    </Suspense>
  );
};

export default AppRouter;
