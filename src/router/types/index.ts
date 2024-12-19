import { ReactNode } from "react";

/**
 * Route Configuration Type
 *
 * Represents the structure of a single route in the application.
 *
 * - **`path`**: A string defining the URL path for the route.
 * - **`element`**: A React element rendered when the route matches.
 * - **`key`**: A unique identifier for the route, useful for React keys.
 * - **`children` (optional)**: An array of nested `RouteConfig` objects for child routes.
 */

export interface RouteConfig {
  path: string;
  element: ReactNode;
  key: string;
  children?: RouteConfig[];
}
