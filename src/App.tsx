import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import BaseContainer from "./core/BaseContainer";
import { routes } from "./core/Menu";
import { theme } from "./core/Theme";

export default function App() {
  return (
    <CssVarsProvider disableTransitionOnChange theme={theme} defaultMode="dark">
      <CssBaseline />
      <BaseContainer>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </BaseContainer>
    </CssVarsProvider>
  );
}
