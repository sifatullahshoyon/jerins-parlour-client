import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/Title";
import PrimaryBtn from "../../../../components/Button/PrimaryBtn";
import { AuthContext } from "../../../../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { IoCloudUploadOutline } from "react-icons/io5";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";

const UpdateItem = ({services}) => {
    const data = useLoaderData();
    console.log(data);
    const { user } = useContext(AuthContext);
  const [showName, setShowName] = useState({});
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
   const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // const formData = new FormData();
    // formData.append('image', data.image[0]);
    // try {
    //   const response = await axiosPublic.post('/upload', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });
    //   console.log(response.data);
    // //   reset();
    // } catch (error) {
    //   console.error('Error uploading image', error);
    // }

    try {
        const cartItem = {
            heading : data.serviceTitle,
            description: data.Description,
            price : parseFloat(data.price)
        };
        const servicesItem = await axiosSecure.post('/services' , cartItem)
        console.log(servicesItem.data)
        if(servicesItem.data.insertedId){
            reset();
            toast.success("Services Added.")
        }
        
    } catch (error) {
        console.error(error);
    }

  };
    return (
        <div>
      <Title title="Add service" />
      <div className="flex flex-row flex-wrap justify-between items-center p-4">
        <p className="font-Poppins font-semibold text-xl text-text-dark">
          Updated Services
        </p>
        <p className="font-Poppins font-semibold text-xl text-text-dark">
          {user?.displayName}
        </p>
      </div>
      {/* Content Part */}
      <div className="min-h-screen bg-[#F4F7FC] w-full p-5">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          {/* 1nd Colum */}
          <div className="flex flex-row flex-wrap items-center gap-5">
            {/* First row */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-base text-text-color font-bold font-Poppins"
              >
                Service Title
              </label>
              <input
                {...register("serviceTitle")}
                id="email"
                className="rounded-lg bg-white sm:w-2/3 md:w-[570px] px-2 py-3 text-text-gray focus:outline-none"
                type="text"
                placeholder="Enter title"
                defaultValue={data.heading}
                required
              />
            </div>
            {/* 2nd row */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-base text-text-color font-bold font-Poppins"
              >
                Image
              </label>
              <div className=" flex justify-center items-center gap-4">
                <label
                  className="flex h-10  items-end gap-2 rounded-md bg-[#FFEAF3] px-4 py-2 text-primary-color active:ring-4 active:ring-cyan-200"
                  htmlFor="file"
                >
                  <IoCloudUploadOutline className="text-xl text-primary-color" />
                  <p className="text-lg font-medium">Upload Image</p>
                  {/* TODO: Upload image on server */}
                  {/* <input type="file" className="hidden" {...register("image")} name="" id="file" /> */}
                </label>
              </div>
            </div>
          </div>
          {/* 2nd Colum */}
          <div className="flex flex-row flex-wrap items-center gap-5 my-8">
            {/* First row */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-base text-text-color font-bold font-Poppins"
              >
                Price
              </label>
              <input
                {...register("price")}
                id="email"
                className="rounded-lg bg-white sm:w-2/3 md:w-[570px] px-2 py-3 text-text-gray focus:outline-none"
                type="text"
                placeholder="$ Price"
                defaultValue={data.price}
                required
              />
            </div>
          </div>
          {/* 3nd Colum */}
          <div className="flex flex-row flex-wrap items-center gap-5 my-8">
            {/* First row */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-base text-text-color font-bold font-Poppins"
              >
                Description
              </label>
              <textarea
                {...register("Description")}
                id="email"
                className="rounded-lg bg-white sm:w-2/3 md:w-[570px] h-32 px-2 pt-2 text-text-gray focus:outline-none"
                type="text"
                placeholder="Enter Designation"
                required
              ></textarea>
            </div>
          </div>
          {/* 4rd Colum */}
          <div className="flex flex-row flex-wrap items-center gap-5 my-8">
            {/* First row */}
            <div className="flex flex-col space-y-2">
              <PrimaryBtn width="w-[130px]">Update Item</PrimaryBtn>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
};

export default UpdateItem;