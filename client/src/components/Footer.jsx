import { useLocation, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { setLogout } from "../store/auth-slice";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleExit = () => {
    setLogout();
  };

  return (
    <div className="flex justify-between px-4 bg-slate-300 py-3 h-full">
      <Button className="primeBtn" onClick={handleExit}>
        Exit
      </Button>
      <div className="flex gap-2">
        <Button className="primeBtn" onClick={() => window.location.reload()}>
          Refresh
        </Button>
        <Button className="primeBtn">Clear</Button>
        <Button className="primeBtn" onClick={() => navigate("/dashboard")}>
          Menu
        </Button>
      </div>
    </div>
  );
};

export default Footer;
