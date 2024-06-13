import React, { useState } from "react";
import Title from "../../../components/Title";
import { set, useForm } from "react-hook-form";
import PrimaryBtn from "../../../components/Button/PrimaryBtn";
import SocialLogin from "../../../components/Shared/SocialLogin/SocialLogin";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  console.log(register());
  const onSubmit = (data) => console.log(data);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="h-screen relative">
      <Title title="Login" />
      <div className="center w-full max-w-md p-8 space-y-3 rounded-xl border-[1px] border-[#ABABAB] bg-white  font-sans mx-auto">
        <h1 className="text-2xl font-bold text-text-dark">Login</h1>
        {/* Input fields and the form started */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2 text-sm">
            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-b-[#ABABAB] border-b"
              {...register("email")}
            />
          </div>
          <div className="space-y-2 text-sm">
            <div className="relative flex flex-row items-center">
              <input
                type={`${!showPassword ? "password" : "text"}`}
                placeholder="password"
                className="w-full px-4 py-3 rounded-md border-b-[#ABABAB] border-b"
                {...register("password")}
              />
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
            props="Log In"
            className="text-lg  p-[10px] block w-full  text-white "
          ></PrimaryBtn>
        </form>
        <div className="flex items-center pt-4 space-x-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="text-sm text-gray-600">Or</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
          Don&apos;t have an account?
          <a href="#" className="underline text-primary-color">
            Sign up
          </a>
        </p>
        {/* Social icons */}
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
