"use client";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Load your Stripe publishable key from .env
const stripePromise = loadStripe(
  process.env.REACT_APP_CHECKOUT_PUBLISHABLE_KEY
);

export default function StripeWrapper2({ children }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
