import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/gallery", 
        element: <Gallery></Gallery>,
      },
    ],
  },
]);
