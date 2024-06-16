import React from "react";
import { Bounce, ToastContainer } from "react-toastify";

const ContainerToast = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      Bounce={true}
    />
  );
};

export default ContainerToast;
