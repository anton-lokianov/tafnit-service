import { useLocation, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { setLogout } from "../store/auth-slice";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentLocation = location.pathname === "/dashboard";

  const handleExit = () => {
    setLogout();
    navigate("/");
  };

  return (
    <div className="flex justify-between px-4 bg-slate-300 py-3 h-full items-center">
      <Button className="primeBtn" onClick={handleExit}>
        Exit
      </Button>
      {currentLocation && (
        <div className="flex items-center gap-1">
          <span className="text-[1.2rem] font-bold text-indigo-900">
            created By
          </span>
          <img src="/logo.png" width={34} alt="anton lokainov" />
        </div>
      )}

      <div className="flex gap-2 items-center">
        {currentLocation && (
          <>
            <a
              href="https://www.linkedin.com/in/anton-lokianov/"
              target="_blank"
              rel="noreferrer"
              className="text-[1.7em] text-indigo-900 hover:text-orange-900 ease-in-out transition-all">
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/anton-lokianov"
              target="_blank"
              rel="noreferrer"
              className="text-[1.7rem] text-indigo-900 hover:text-orange-900 ease-in-out transition-all">
              <AiFillGithub />
            </a>
          </>
        )}
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
