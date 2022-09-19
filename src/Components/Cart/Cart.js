import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "sushi",
          description: "delicious with fish and veggetables",
          amount: "12.84",
        },
      ].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button classname={classes["button-alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
