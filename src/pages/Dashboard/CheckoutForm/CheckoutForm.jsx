import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import "./CheckoutForm.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const CheckoutForm = ({ cart, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    // console.log("🚀 ~ handleSubmit ~ card:", card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error("payment error", error);
      setCardError(error.message);
    } else {
      // console.log('[PaymentMethod]', paymentMethod);
      setCardError("");
    }

    setProcessing(true);

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.error("confirm error");
    } else {
      setProcessing(false);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        // save payment information to the server
        const paymentInfo = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price,
          data: new Date(),
          quantity: cart.length,
          cartItemsId: cart.map((item) => item._id),
          servicesItemsId: cart.map((item) => item.serviceId),
          status: "Service Pending",
          itemNames: cart.map((item) => item.heading),
        };
        axiosSecure.post("/payments", paymentInfo).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            toast.success("Disply success");
          }
        });
      }
    }
  };
  return (
    <div>
      <form className="w-1/4 payment-form" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          colorScheme="blue"
          mt="5"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="payment-button"
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-rose-600 w-1/4 mx-auto">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600 mt-3 w-1/4 mx-auto">
          Your transaction id: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
