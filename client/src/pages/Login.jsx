import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { FiLogIn, FiUser, FiLock } from "react-icons/fi";
import { GiTowTruck } from "react-icons/gi";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setLogin } from "../service/auth-slice";
import { useLoginMutation } from "../service/user-api";

const Login = () => {
  const controls = useAnimation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();

  useEffect(() => {
    controls.start({
      x: 350,
      transition: { duration: 4, repeat: Infinity },
    });
  }, [controls]);

  const onSubmit = async (data) => {
    try {
      const result = await login({
        username: data.username,
        password: data.password,
      }).unwrap();
      dispatch(setLogin({ user: result.user, token: result.token }));
      navigate("/dashboard");
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-login bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md p-5 rounded-sm shadow-lg w-[450px] border border-gray-200 border-opacity-20">
        <h1 className="text-center flex justify-center items-center gap-3 font-bold text-[2.5rem] text-white mb-3">
          Tafnit <FiLogIn className="text-indigo-600" />
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            label="User name"
            {...register("username")}
            icon={<FiUser />}
          />
          <Input
            type="password"
            {...register("password")}
            icon={<FiLock />}
            label="Password"
          />
          <Button
            className="primeBtn tracking-[0.3em] mt-5 flex justify-center items-center gap-2 group"
            type="submit"
          >
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                {"LOGIN"}
                <AiOutlineArrowRight className="text-[1.2rem] group-hover:translate-x-2 ease-in-out transition-all" />
              </>
            )}
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
