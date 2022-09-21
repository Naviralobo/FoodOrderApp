import React, { useContext } from "react";
import CartCntxt from "../../Store/CartContext";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
  const cartCntxt = useContext(CartCntxt);
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
            <button>+</button>
            <button>-</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
