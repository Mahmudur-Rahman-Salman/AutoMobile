import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children:[
      {
        path: "/dashboard/cart", 
        element: <Cart></Cart>, 
      },
      // admin routes 
      {
        path: "/dashboard/users", 
        element: <AllUsers></AllUsers>
      }
    ]
  },
]);
