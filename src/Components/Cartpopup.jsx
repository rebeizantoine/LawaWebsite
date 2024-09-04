import React from "react";
import { useCart } from "./Cartcontext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/cartpopup.css"; // Ensure your styles are correctly imported

const CartPopup = ({ items, onClose }) => {
  const { clearCart } = useCart();
  const navigate = useNavigate(); // Use navigate hook

  // Function to render item details safely
  const renderItemDetail = (detail) => {
    if (typeof detail === "object" && detail !== null) {
      try {
        return JSON.stringify(detail);
      } catch (e) {
        console.error("Error stringifying object:", e);
        return "Invalid object";
      }
    }
    return detail;
  };

  // Function to clear the cart and show a toast notification
  const handleEmptyCart = () => {
    clearCart();
    toast.success("Cart has been emptied!"); // Show toast notification
    setTimeout(() => {
      onClose();
    }, 500);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price) || 0; // Ensure the price is a number
      return total + price;
    }, 0);
  };

  const totalAmount = calculateTotalPrice();

  // Ensure totalAmount is a number
  const totalAmountFormatted = isNaN(totalAmount)
    ? "0.00"
    : totalAmount.toFixed(2);

  // Function to handle order summary and navigate to order page
  const handleOrderSummary = () => {
    if (items.length > 2) {
      toast.error("You can only have a maximum of 2 items in the cart.");
      return;
    }
    navigate("/order", { state: { cartItems: items, totalAmount } });
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div className="cart-popup-overlay">
      <div className="cart-popup">
        <button className="cart-popup-close" onClick={onClose}>
          X
        </button>
        <h3>Cart Details</h3>
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="cart-item">
              <p>Service: {renderItemDetail(item.service)}</p>
              <p>Quantity: {renderItemDetail(item.quantity)} </p>
              <p>Price: {renderItemDetail(item.price)}$</p>
            </div>
          ))
        )}
        {/* Delete Button with Animation */}
        <button className="button" onClick={handleEmptyCart}>
          <span className="button__text">Delete</span>
          <span className="button__icon">
            <svg
              className="svg"
              height="512"
              viewBox="0 0 512 512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "32px",
                }}
              ></path>
              <line
                style={{
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeMiterlimit: "10",
                  strokeWidth: "32px",
                }}
                x1="80"
                x2="432"
                y1="112"
                y2="112"
              ></line>
              <path
                d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "32px",
                }}
              ></path>
              <line
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "32px",
                }}
                x1="256"
                x2="256"
                y1="176"
                y2="400"
              ></line>
              <line
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "32px",
                }}
                x1="184"
                x2="192"
                y1="176"
                y2="400"
              ></line>
              <line
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "32px",
                }}
                x1="328"
                x2="320"
                y1="176"
                y2="400"
              ></line>
            </svg>
          </span>
        </button>

        {/* Total Amount Button */}
        <button className="custom-button" onClick={handleOrderSummary}>
          <div className="popsmoke">
            <span className="icon">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#00cf53"
                stroke="#00cf53"
              >
                <g transform="translate(0 -1036.362)">
                  <path
                    transform="translate(0 1036.362)"
                    d="M8 1a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7zm0 1a6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6z"
                    style={{ fill: "#00cf53", stroke: "none" }}
                  />
                  <path
                    d="m6 1041.362 5 3-5 3z"
                    style={{ fill: "#00cf53", stroke: "none" }}
                  />
                </g>
              </svg>
            </span>
          </div>
          <span className="text1">Total</span>
          <span className="text2">{totalAmountFormatted}$</span>
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CartPopup;
