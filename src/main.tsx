import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import store from "./store/store";
import "./shared/styles/main.scss";

const rootElement = document.getElementById("root");
const queryClient = new QueryClient();

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
