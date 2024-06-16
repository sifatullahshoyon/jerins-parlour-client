import React, { useContext, useState } from "react";
import Title from "../../../components/Title";
import { useForm } from "react-hook-form";
import PrimaryBtn from "../../../components/Button/PrimaryBtn";
import SocialLogin from "../../../components/Shared/SocialLogin/SocialLogin";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { Bounce, toast } from "react-toastify";
import { TbFidgetSpinner } from "react-icons/tb";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, loading, setLoading } = useContext(AuthContext);
  console.log("loading =>", loading);
  const onSubmit = (data) => {
    const email = data?.email;
    const password = data?.password;
    try {
      signIn(email, password)
        .then((result) => {
          reset();
          setLoading(false);
          const loggedInUser = result?.user;
          toast.success("Sign In Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        })
        .catch((error) => {
          setLoading(false);
          const errorMessage = error.message;
          toast.error(errorMessage, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        });
    } catch (error) {
      console.error(error);
    }
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="h-screen relative">
      <Title title="Login" />
      <div className="center w-full max-w-md p-8 space-y-3 rounded-xl border-[1px] border-[#ABABAB] bg-white  font-sans mx-auto">
        <h1 className="text-2xl font-bold text-text-dark mb-8">Login</h1>
        {/* Input fields and the form started */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2 text-sm">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-b-[#ABABAB] border-b"
              {...register("email", { required: true })}
            />
            <p className="text-rose-600">{errors.email?.message}</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="relative flex flex-row items-center">
              <input
                type={`${!showPassword ? "password" : "text"}`}
                placeholder="password"
                className="w-full px-4 py-3 rounded-md border-b-[#ABABAB] border-b"
                {...register("password", { required: true })}
              />
              <p className="text-rose-600">{errors.firstName?.message}</p>
              <span
                onClick={handleShowPassword}
                className="absolute right-2 cursor-pointer"
              >
                {showPassword ? <BiSolidShow /> : <BiSolidHide />}
              </span>
            </div>

            <div className="flex justify-end text-xs ">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>
          {/* Sign in Button */}
          <PrimaryBtn
            width="w-full"
            className="text-lg p-[10px] block w-full text-white"
          >
            {loading ? (
              <TbFidgetSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "Log In"
            )}
          </PrimaryBtn>
        </form>
        <div className="flex items-center pt-4 space-x-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="text-sm text-gray-600">Or</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
          Don&apos;t have an account?
          <Link to="/registration" className="underline text-primary-color">
            Sign up
          </Link>
        </p>
        {/* Social icons */}
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
