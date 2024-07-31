import React, { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";
import Title from "../../../../components/Title";

const OrderList = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Title title="Order" />
      <div className="flex flex-row flex-wrap justify-between items-center p-4">
        <p className="font-Poppins font-semibold text-xl text-text-dark">
          Order List
        </p>
        <p className="font-Poppins font-semibold text-xl text-text-dark">
          {user?.displayName}
        </p>
      </div>
      {/* Content Part */}
      <div className="min-h-screen bg-[#F4F7FC] w-full p-5">
        <div className="flex flex-row items-center justify-center h-screen">
          <h1 class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
            Coming Soon
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
