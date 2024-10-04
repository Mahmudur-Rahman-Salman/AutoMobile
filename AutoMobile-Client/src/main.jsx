import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <div className="max-w-screen-xl mx-auto"> */}
    <div>
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
