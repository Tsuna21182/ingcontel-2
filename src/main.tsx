import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/app/globals.css";

import Home from "./app/page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
