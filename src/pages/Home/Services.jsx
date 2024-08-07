import React, { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAdmin from "../../hooks/useAdmin";

const Services = ({ service, index, refetch }) => {
  const { _id, heading, img_link, price, description } = service;
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = useAdmin();
  // Determine the CSS classes to apply
  const cardClasses = `w-[370px] flex flex-col justify-center items-center font-Poppins py-5 mx-auto ${
    index === 1 ? "shadow-lg" : ""
  } hover:shadow-lg relative transition-shadow duration-300 ease-in-out group`;

  const handleAddToCart = async (props) => {
    if (user && user?.email) {
      // Send Cart Item to the database
      try {
        const cartItem = await axiosSecure
          .post("/carts", {
            serviceId: _id,
            email: user?.email,
            heading,
            img_link,
            description,
            price,
          })
          .then((res) => {
            if (res.data?.insertedId) {
              toast.success(`${heading} add Your Cart`);
            }
          });
      } catch (error) {
        console.error("Error posting data:", error);
      }
    } else {
      Swal.fire({
        title: "You are Not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          // Send The User Login Page.
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  const handleDeleteCart = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't delete this!",
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
              text: "Item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className={cardClasses}>
      <img src={img_link ? img_link : "Img Not Found"} alt="services icon" />
      <h2 className="text-xl text-text-color font-semibold py-2">
        {heading ? heading : "Data Not Found"}
      </h2>
      <h6 className="text-primary-color text-xl font-medium pb-3">
        ${price ? price : "Data Not Found"}
      </h6>
      <p className="w-72 leading-7 text-center font-light text-base overflow-hidden text-balance">
        {description ? description : "Data Not Found"}
      </p>
      <div className="group-hover:mb-2 group-hover:mt-10 group-hover:duration-100">
        <button
          onClick={() => handleAddToCart(service)}
          className="absolute bottom-4 left-12 bg-blue-500 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity group-hover:duration-500 duration-300 ease-in-out"
        >
          Add to Cart
        </button>
        {isAdmin && (
          <button
            onClick={() => handleDeleteCart(service._id)}
            className="absolute bottom-4 ml-5 bg-rose-500 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity group-hover:duration-500 duration-300 ease-in-out"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Services;
