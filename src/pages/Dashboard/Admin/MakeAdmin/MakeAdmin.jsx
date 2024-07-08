import React, { useContext } from "react";
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

const MakeAdmin = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  //   All Users
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${user?.name} is Admin Now.`);
      }
    });
  };

  const handleDeleteUser = (id) => {
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
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
          Make Admin
        </p>
        <p className="font-Poppins font-semibold text-xl text-text-dark">
          {user?.displayName}
        </p>
      </div>
      {/* Content Part */}

      {/* Todo: Search Field Work */}
      <div className="min-h-screen bg-[#F4F7FC] w-full p-5">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <div className="flex flex-row flex-wrap items-center gap-2">
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-base text-text-color font-bold font-Poppins"
              >
                Email
              </label>
              <input
                {...register(user?.displayName)}
                id="email"
                className="rounded-lg bg-white sm:w-2/3 md:w-[570px] px-2 py-3 text-text-gray focus:outline-none"
                type="text"
                placeholder="jon@gamil.com "
                required
              />
            </div>
            <div className="mt-8">
              <PrimaryBtn width="w-[108px] ">Submit</PrimaryBtn>
            </div>
          </div>
        </form>
        {/* End Form Part */}
        <div>
          <h4 className="text-lg md:text-xl lg:text-2xl text-text-dark font-Poppins font-bold mt-10 mb-5">
            Total Users : {users?.length ? users?.length : 0}
          </h4>
          <div className="overflow-x-auto">
            <table className="min-w-[90%] border border-gray-100 my-6">
              <thead>
                <tr className="bg-[#f86da0] text-white">
                  <th className="py-4 px-6 text-lg text-left border-b">#</th>
                  <th className="py-4 px-6 text-lg text-left border-b">Name</th>
                  <th className="py-4 px-6 text-lg text-left border-b">
                    Email
                  </th>
                  <th className="py-4 px-6 text-lg text-left border-b">Role</th>
                  <th className="py-4 px-6 text-lg border-b text-end">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => (
                  <tr
                    key={user._id}
                    className="hover:bg-gray-50 border-b transition duration-300"
                  >
                    <td className="py-4 px-4 mx-auto">{index + 1}</td>
                    <td className="py-4 px-4 flex">
                      {user?.name ? user?.name : "Data Not Found"}
                    </td>
                    <td className="py-4 px-6 border-b text-xl font-medium">
                      {user?.email ? user?.email : "Data Not Found"}
                    </td>
                    <td className="py-4 px-6 border-b text-lg font-medium">
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="bg-primary-color scale-100 transition-all duration-100 text-white p-3 rounded-full"
                        >
                          <FaUserShield />
                        </button>
                      )}
                    </td>
                    <td className="py-4 px-6 border-b text-end">
                      <button
                        onClick={() => handleDeleteUser(user?._id)}
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

export default MakeAdmin;
