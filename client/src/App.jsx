import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/Login";
import Panel from "./pages/Panel";
import Dashboard from "./pages/Dashboard";
import DriverPanel from "./pages/DriverPanel";
import UserPanel from "./pages/UserPanel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="panel" element={<Panel />} />
          <Route path="driverPanel" element={<DriverPanel />} />
          <Route path="userPanel" element={<UserPanel />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
