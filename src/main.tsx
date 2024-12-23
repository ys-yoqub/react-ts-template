import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";
import store from "./store/store";
import theme from "./styles/theme";
import "./shared/styles/main.scss";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  const queryClient = new QueryClient();

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
