import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./assets/styles/index.scss";
import { ApiContext } from "./context/ApiContext.jsx";
import { router } from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiContext value="https://restapi.fr/api/recipes">
      <RouterProvider router={router}></RouterProvider>
    </ApiContext>
  </StrictMode>,
);
