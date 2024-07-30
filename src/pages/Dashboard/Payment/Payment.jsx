import React, { useContext, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { AuthContext } from "../../../providers/AuthProviders";
import Title from "../../../components/Title";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, error, refetch, cart] = useCart();
  const total = cart?.reduce((sum, item) => sum + item.price, 0);
  const price = total;
  return (
    <div>
      <Title title="Payment" />
      <div className="flex flex-row flex-wrap justify-between items-center p-4">
        <p className="font-Poppins font-semibold text-xl text-text-dark">
          Payment
        </p>
        <p className="font-Poppins font-semibold text-xl text-text-dark">
          {user?.displayName}
        </p>
      </div>
      {/* Content Part */}
      <div className="min-h-screen bg-[#F4F7FC] w-full p-5">
        <div className=" min-h-screen mx-auto">
          <Elements stripe={stripePromise}>
            <CheckoutForm cart={cart} price={price}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
