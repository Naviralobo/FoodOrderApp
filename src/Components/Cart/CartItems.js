import React, { useContext } from "react";
import CartCntxt from "../../Store/CartContext";
import classes from "./CartItems.module.css";

const CartItems = () => {
  const cartCntxt = useContext(CartCntxt);
  const removeAddedItem = (item) => {
    cartCntxt.removeItem(item);
  };
  return (
    <ul className={classes["cart-items"]}>
      {cartCntxt.items.map((item) => (
        <li className={classes["display-items"]}>
          <div>
            <div className={classes.name}>{item.name}</div>
            <div className={classes.price}>
              ${item.price}
              <span className={classes.numbers}> x {item.quantity}</span>
            </div>
          </div>
          <div className={classes["add-delete"]}>
            <button
              className={classes.addButton}
              onClick={() => {
                cartCntxt.addItem(item);
              }}
            >
              +
            </button>
            <button
              className={classes.deleteButton}
              onClick={() => {
                removeAddedItem(item);
              }}
            >
              -
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
