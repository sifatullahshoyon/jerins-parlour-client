import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProviders";
import { toast } from "react-toastify";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn, setLoading } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Login Successfully");
        setLoading(false);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      {/* Facebook Btn */}
      <div className="mb-4">
        <button className="inline-flex items-center w-full border-[1px] border-[#ABABAB] rounded-full gap-20 py-2 px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path
              fill="#039be5"
              d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
            ></path>
            <path
              fill="#fff"
              d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
            ></path>
          </svg>
          <p className="text-text-dark text-base text-balance font-medium font-Poppins">
            Continue with Facebook
          </p>
        </button>
      </div>
      {/* Google Btn */}
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="inline-flex items-center w-full border-[1px] border-[#ABABAB] rounded-full gap-20 py-2 px-1"
        >
          <FcGoogle className="text-3xl" />
          <p className="text-text-dark text-base text-balance font-medium font-Poppins">
            Continue with Google
          </p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
