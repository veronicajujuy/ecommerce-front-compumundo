import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemDetail from "./components/ItemDetail.jsx";
import ErrorPage from "./errorpage.jsx";
import Layout from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Login from "./components/Login.jsx";
import AddItems from "./components/AddItems.jsx";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Main,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/products/addItem",
            element: <AddItems />,
          },
        ],
      },
      {
        path: "/products/:id",
        element: <ItemDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
