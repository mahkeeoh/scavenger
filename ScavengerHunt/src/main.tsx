import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/route";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/login";
import ErrorPage from "./error-page";
import Prompts from "./routes/prompts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:userName/prompts",
    element: <Prompts />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
