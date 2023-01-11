import React from "react";
import { ThemeProvider } from "styled-components";
import { createRoot } from "react-dom/client";

import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme";
import Home from "./templates/Home";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
