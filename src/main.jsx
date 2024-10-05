import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Hoome } from "./pages/Hoome.jsx";

const router = createBrowserRouter([
  {
    path: "/024_netflix_/",
    element: <App />,
    children: [{ path: "/024_netflix_/", element: <Hoome /> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
