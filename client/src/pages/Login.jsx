import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { FiLogIn, FiUser, FiLock } from "react-icons/fi";
import { GiTowTruck } from "react-icons/gi";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const controls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    controls.start({
      x: 350,
      transition: { duration: 4, repeat: Infinity },
    });
  }, [controls]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-login bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md p-5 rounded-sm shadow-lg w-[450px] border border-gray-200 border-opacity-20">
        <h1 className="text-center flex justify-center items-center gap-3 font-bold text-[2.5rem] text-white mb-3">
          Tafnit <FiLogIn className="text-indigo-600" />
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input label="User name" icon={<FiUser />} />
          <Input type="password" icon={<FiLock />} label="Password" />
          <Button
            className="primeBtn tracking-[0.3em] flex justify-center items-center gap-2 group"
            type="submit"
          >
            LOGIN{" "}
            <AiOutlineArrowRight className="text-[1.2rem] group-hover:translate-x-2 ease-in-out transition-all" />
          </Button>
        </form>
        <span className="underline hover:text-slate-50 hover:cursor-pointer ease-in-out transition-all">
          forgot password?
        </span>
        <motion.div className="mt-3" animate={controls}>
          <GiTowTruck className="text-orange-500 text-[4rem]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
