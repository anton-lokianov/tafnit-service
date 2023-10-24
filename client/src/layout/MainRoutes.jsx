import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Login from "./../pages/Login";
import Panel from "./../pages/Panel";
import Dashboard from "../pages/Dashboard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <></>,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/panel",
        element: <Panel />,
      },
    ],
  },
]);
