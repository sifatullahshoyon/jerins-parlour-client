import React, { useContext, useState } from "react";
import Title from "../../../components/Title";
import { useForm } from "react-hook-form";
import PrimaryBtn from "../../../components/Button/PrimaryBtn";
import SocialLogin from "../../../components/Shared/SocialLogin/SocialLogin";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { Bounce, toast } from "react-toastify";

const Registration = () => {
  const {
    register,
    handleSubmit,
    reset ,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    const firstName = data?.firstName;
    const lastName = data?.lastName;
    const fullName = firstName + " " + lastName;
    const email = data?.email;
    const password = data?.password;
    const passwordConfirmation = data?.confirmPassword;

    try {
      createUser(email, password)
        .then((result) => {
          const loggedInUser = result?.user;
          
          updateUserProfile(fullName)
            .then(() => {
              reset();
              toast.success("User Create Successfully", {
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
        })
        .catch((error) => {
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
      <Title title="Registration" />
      <div className="center w-full max-w-md p-8 space-y-3 rounded-xl border-[1px] border-[#ABABAB] bg-white  font-sans mx-auto">
        <h1 className="text-2xl font-bold text-text-dark mb-8">
          Create an account
        </h1>
        {/* Input fields and the form started */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2 text-sm">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-md border-b-[#ABABAB] border-b"
              {...register("firstName" , { required: true })}
              />
              <p className="text-rose-600">{errors.firstName?.message}</p>
          </div>
          <div className="space-y-2 text-sm">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-md border-b-[#ABABAB] border-b"
              {...register("lastName" , { required: true })}
            />
            <p className="text-rose-600">{errors.lastName?.message}</p>
          </div>
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
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-b-[#ABABAB] border-b"
                {...register("password", { required: true })}
              />
              <p className="text-rose-600">{errors.password?.message}</p>
              <span
                onClick={handleShowPassword}
                className="absolute right-2 cursor-pointer"
              >
                {showPassword ? <BiSolidShow /> : <BiSolidHide />}
              </span>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="relative flex flex-row items-center">
              <input
                type={`${!showPassword ? "password" : "text"}`}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-md border-b-[#ABABAB] border-b"
                {...register("confirmPassword", { required: true })}
              />
              <p className="text-rose-600">{errors.confirmPassword?.message}</p>
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
            props="Create an account"
            className="text-lg  p-[10px] block w-full  text-white "
          ></PrimaryBtn>
        </form>
        <div className="flex items-center pt-4 space-x-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="text-sm text-gray-600">Or</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
          Already have an account?
          <Link to="/login" className="underline text-primary-color">
            Sign In
          </Link>
        </p>
        {/* Social icons */}
        <SocialLogin />
      </div>
    </div>
  );
};

export default Registration;
