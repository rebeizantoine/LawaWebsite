import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // Initialize state from local storage, or use an empty array if nothing is stored
  const [cartItems, setCartItems] = useState(() => {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  // Update local storage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Clear cart and local storage
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems"); // Clear cart from local storage
  };

  const value = {
    cartItems,
    addToCart: (item) => setCartItems((prevItems) => [...prevItems, item]),
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
