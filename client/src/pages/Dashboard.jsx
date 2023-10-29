import Sidebar from "../components/SideBar";
import GoogleMaps from "../components/GoogleMaps";

const Dashboard = () => {
  return (
    <div className="h-full flex">
      <Sidebar />
      <GoogleMaps />
    </div>
  );
};

export default Dashboard;
