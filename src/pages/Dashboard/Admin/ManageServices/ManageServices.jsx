import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/Title";
import PrimaryBtn from "../../../../components/Button/PrimaryBtn";
import { AuthContext } from "../../../../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useServices from "../../../../hooks/useServices";
import { Link } from "react-router-dom";

const ManageServices = () => {
    const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const axiosSecure = useAxiosSecure();

  //   All Users
//   const axiosSecure = useAxiosSecure();
//   const { data: users = [], refetch } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/users");
//       return res.data;
//     },
//   });

  const [services, refetch] = useServices();
  

  const handleEditItem = (services) => {
    console.log("🚀 ~ handleEditItem ~ services:", services._id);
    
  };

  const handleDeleteItem = (id) => {
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't delete this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     axiosSecure.delete(`/services/${services._id}`).then((res) => {
            
    //       console.log("🚀 ~ axiosSecure.delete ~ res:", res)
    //       if (res.data.deletedCount > 0) {
    //         refetch();
    //         Swal.fire({
    //           title: "Deleted!",
    //           text: "Item has been deleted.",
    //           icon: "success",
    //         });
    //       }
    //     });
    //   }
    // });

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/services/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });

    
  };
    return (
        <div>
      <Title title="All Users" />
      <div className="flex flex-row flex-wrap justify-between items-center p-4">
        <p className="font-Poppins font-semibold text-xl text-text-dark">
        Manage Services
        </p>
        <p className="font-Poppins font-semibold text-xl text-text-dark">
          {user?.displayName}
        </p>
      </div>
      {/* Content Part */}
      <div className="min-h-screen bg-[#F4F7FC] w-full p-5">
        <div>
          <h4 className="text-lg md:text-xl lg:text-2xl text-text-dark font-Poppins font-bold mt-10 mb-5">
            Total Items : 
          </h4>
          <div className="overflow-x-auto">
            <table className="min-w-[90%] border border-gray-100 my-6">
              <thead>
                <tr className="bg-[#f86da0] text-white">
                  <th className="py-4 px-6 text-lg text-left border-b">#</th>
                  <th className="py-4 px-6 text-lg text-left border-b">Image</th>
                  <th className="py-4 px-6 text-lg text-left border-b">Item Name</th>
                  <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                  <th className="py-4 px-6 text-lg text-left border-b">Update</th>
                  <th className="py-4 px-6 text-lg border-b text-end">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {services?.map((service, index) => (
                  <tr
                    key={service._id}
                    className="hover:bg-gray-50 border-b transition duration-300"
                  >
                    <td className="py-4 px-4 mx-auto">{index + 1}</td>
                    <td className="py-4 px-4 flex">
                        <img src={service?.img_link ? service?.img_link : "Img Not Found"} alt="services Img" className="h-16 w-16 object-cove" />
                    </td>
                    <td className="py-4 px-6 border-b text-xl font-medium">
                      {service?.heading ? service?.heading : "Data Not Found"}
                    </td>
                    <td className="py-4 px-6 border-b text-lg font-medium">
                      ${service?.price ? service?.price : "Data Not Found"}
                    </td>
                    <td className="py-4 px-6 border-b">
                         {/* Todo: services update button work */}
                       <div>{
                        <Link to={`/dashboard/updateItem/${service._id}`}>
                        <button
                          onClick={() => handleEditItem(services)}
                          className="bg-green-400  scale-100 transition-all duration-100 text-white p-3 rounded-full"
                        >
                          <FaEdit />
                        </button>
                        </Link>                        
                        }</div>
                    </td>
                    {/* Todo: Services Delete Work */}
                    <td className="py-4 px-6 border-b text-end">
                      <button
                        onClick={() => handleDeleteItem (services._id)}
                        className="bg-rose-500  scale-100 transition-all duration-100 text-white p-3 rounded-full"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ManageServices;
