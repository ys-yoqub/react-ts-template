import { RouteConfig } from "./types";
import withSuspense from "./withSuspense";
import { TodoListPage, TodoDetailsPage } from "./lazyPages";

/**
 * Application Route Configuration
 *
 * This file defines the routing structure of the application. It uses a custom `RouteConfig` interface
 * to type-check the routes and enable nested routes via the `children` property.
 *
 * - **`path`**: The URL path for the route.
 * - **`element`**: The React component that will be rendered for the route.
 * - **`key`**: A unique identifier for the route.
 * - **`children` (optional)**: Sub-routes nested under the current route.
 *
 * If you are using nested routes, ensure the parent component renders the `<Outlet />` component
 * to display the child route's content.
 */

const routes: RouteConfig[] = [
  {
    path: "/todo",
    element: withSuspense(TodoListPage),
    key: "todo",
  },
  {
    path: "todo/:id",
    element: withSuspense(TodoDetailsPage),
    key: "todo-details",
  },
];

export default routes;
