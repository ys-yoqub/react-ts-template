import { lazy } from "react";

const TodoListPage = lazy(() => import("../modules/todo/pages/TodoListPage"));
const TodoDetailsPage = lazy(
  () => import("../modules/todo/pages/TodoDetailsPage")
);

interface RouteConfig {
  path: string;
  element: JSX.Element;
  key: string;
  children?: RouteConfig[];
}

const routes: RouteConfig[] = [
  // todo page section
  {
    path: "/todo",
    element: <TodoListPage />,
    key: "todo",
  },
  {
    path: "todo/:id",
    key: "todo-details",
    element: <TodoDetailsPage />,
  },
  {
    path: "todo/update/:id",
    key: "todo-update",
    element: <TodoDetailsPage />,
  },
  // end of todo page section
];

export default routes;
