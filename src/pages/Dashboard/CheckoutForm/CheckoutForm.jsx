import { useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [cardError, setCardError] = useState("");
    const token = localStorage.getItem("access-token");
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
  
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!stripe || !elements) {
          return;
        }
    
        const card = elements.getElement(CardElement);
    
        if (card === null) {
          return;
        }
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card,
        });
    
        if (error) {
          console.error("payment error", error);
          setCardError(error.message);
        } else {
          setCardError("");
        }
    
        // confirm payment
        const { paymentIntent, error: confirmError } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                email: user?.email || "anonymous",
                name: user?.displayName || "anonymous",
              },
            },
          });
    
        if (confirmError) {
          console.error("confirm error");
        } else {
          if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id);
          }
        }
      };
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
        <Button
          colorScheme="blue"
          mt="5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </Button>
            </form>
            {cardError && <p className="text-rose-600 mt-3">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600 mt-3">
          {" "}
          Your transaction id: {transactionId}
        </p>
      )}
        </div>
    );
};

export default CheckoutForm;