import React, { useContext } from "react";
import Title from "../../../../components/Title";
import { AuthContext } from "../../../../providers/AuthProviders";
import useCart from "../../../../hooks/useCart";
import PrimaryBtn from "../../../../components/Button/PrimaryBtn";
import Loader from "../../../../components/Shared/Loader/Loader";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const BookingList = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, error, refetch, cart] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalItems = cart?.reduce(
    (pre, curr) => pre + parseFloat(curr.price),
    0
  );
  const handleItemDelete = (id) => {
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <Title title="Booking List" />
      <div className="flex flex-row flex-wrap justify-between items-center p-4">
        <p className="font-Poppins font-semibold text-xl text-text-dark">
          Service List
        </p>
        <p className="font-Poppins font-semibold text-xl text-text-dark">
          {user?.displayName}
        </p>
      </div>
      {/* Content Part */}
      <div className="min-h-screen bg-[#F4F7FC] w-full p-5">
        <div className="flex flex-row flex-wrap justify-around items-center my-5">
          <h2 className="text-xl font-bold font-Poppins text-text-dark">
            Items: {cart?.length ? cart?.length : 0}
          </h2>
          <h2 className="text-xl font-bold font-Poppins text-text-dark">
            Total Price: ${totalItems ? totalItems : 0}
          </h2>
          {
            cart.length ? <Link to='/dashboard/payment'><PrimaryBtn width="w-[100px]">Pay</PrimaryBtn></Link> : <button  className="bg-primary-color"></button>
          }
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-[90%] shadow-md border mx-auto  border-gray-100 my-6">
              <thead>
                <tr className="bg-[#f86da0] text-white">
                  <th className="py-4 px-6 text-lg text-left border-b">#</th>
                  <th className="py-4 px-6 text-lg text-left border-b">
                    Product Image
                  </th>
                  <th className="py-4 px-6 text-lg text-left border-b">
                    Product Name
                  </th>
                  <th className="py-4 px-6 text-lg text-left border-b">
                    Price
                  </th>
                  <th className="py-4 px-6 text-lg border-b text-end">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <Loader />
                ) : (
                  cart?.map((item, index) => (
                    <tr
                      key={item._id}
                      className="hover:bg-gray-50 border-b transition duration-300"
                    >
                      <td className="py-4 px-4 mx-auto">{index + 1}</td>
                      <td className="py-4 px-4 flex">
                        <img
                          src={
                            item?.img_link ? item?.img_link : "Img Not Found"
                          }
                          alt="item img"
                          className="h-16 w-16 object-cover "
                        />
                      </td>
                      <td className="py-4 px-6 border-b text-xl font-medium">
                        {item?.heading ? item?.heading : "Data Not Found"}
                      </td>
                      <td className="py-4 px-6 border-b text-lg font-medium">
                        ${item?.price ? item?.price : 0}
                      </td>
                      <td className="py-4 px-6 border-b text-end">
                        <button
                          onClick={() => handleItemDelete(item?._id)}
                          className="bg-rose-500  scale-100 transition-all duration-100 text-white p-3 rounded-full"
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
