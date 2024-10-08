import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import InitClient from "./InitClient";
import router from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InitClient>
      <RouterProvider router={router} />
    </InitClient>
  </StrictMode>
);
