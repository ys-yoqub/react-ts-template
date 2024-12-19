import { lazy } from "react";

/**
 * Lazy-Loaded Components
 *
 * This file handles lazy-loading for components used in the routing system.
 * Using `React.lazy` allows the application to load components on demand, reducing the initial bundle size.
 *
 * Note: Each lazy-loaded component must be the default export of its respective file.
 */

export const TodoListPage = lazy(
  () => import("../modules/todo/pages/TodoListPage")
);
export const TodoDetailsPage = lazy(
  () => import("../modules/todo/pages/TodoDetailsPage")
);
