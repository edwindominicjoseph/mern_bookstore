import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/home.jsx";
import Register from "../components/Register.jsx";
import Login from "../components/login.jsx";
import React from 'react';
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <div>Cart</div>,
        },
        {
          path: "/about",
          element: <div>About</div>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
      ],
    },
  ]);
  export default router;