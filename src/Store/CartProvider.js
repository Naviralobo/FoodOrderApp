import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const addItemToCartHandler = (item) => {
    const existingItems = [...items];
    const itemIdx = existingItems.findIndex((i) => i.id === item.id); //
    console.log(itemIdx);
    if (itemIdx !== -1) {
      console.log("already exists");
      existingItems[itemIdx].quantity =
        Number(existingItems[itemIdx].quantity) + 1;
      updateItems(existingItems);
    } else {
      updateItems([...items, item]);
    }
  };

  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    message: "click here",
  };
  return (
    <CartContext.Provider value={cartContext}>
      {console.log(cartContext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
