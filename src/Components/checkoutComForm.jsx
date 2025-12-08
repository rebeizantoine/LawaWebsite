"use client";

import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import PaymentButton from "./PaymentButton";
import "../Styles/ordersummary.css";

export default function CheckoutForm() {
  const [amount, setAmount] = useState(1000);
  const [message, setMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    if (!stripe || !elements) return;

    try {
      const res = await axios.post("http://localhost:5000/stripe/payments", {
        amount,
      });

      const { clientSecret } = res.data;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setMessage(result.error.message);
      } else if (result.paymentIntent?.status === "succeeded") {
        setMessage("✅ Payment successful!");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Payment failed.");
    }
  };

  console.log("Stripe Key:", process.env.REACT_APP_CHECKOUT_PUBLISHABLE_KEY);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="space-y-4 max-w-md mx-auto p-4 border rounded"
    >
      <label style={{ fontWeight: "500", color: "#333" }}>
        Amount (USD cents):
      </label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        style={{
          width: "100%",
          padding: "12px 16px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "16px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
      <div className="control-element" style={{ marginTop: "30px" }}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                marginTop: "22px",
                color: "#333",
                "::placeholder": {
                  color: "#888",
                },
                padding: "12px 16px",
              },
              invalid: {
                color: "#fa755a",
              },
            },
          }}
        />

        {/* Replace old button with PaymentButton */}
        <div style={{ marginTop: "30px" }}>
          <PaymentButton disabled={!stripe} onClick={handleSubmit} />
        </div>
      </div>

      {message && <p className="mt-2 text-sm">{message}</p>}
    </form>
  );
}
