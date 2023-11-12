import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Login from "./../pages/Login";
import Panel from "./../pages/Panel";
import Dashboard from "../pages/Dashboard";
import DriverPanel from "../pages/DriverPanel";
import UserPanel from "../pages/UserPanel";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
      {
        path: "/driverPanel",
        element: <DriverPanel />,
      },
      {
        path: "/userPanel",
        element: <UserPanel />,
      },
    ],
  },
]);
