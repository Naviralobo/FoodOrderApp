import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartCntxt from "../../Store/CartContext";
import { useContext } from "react";
import CartItems from "./CartItems";

const Cart = (props) => {
  const cartCntxt = useContext(CartCntxt);
  const cartItems = <CartItems />;

  let totalAmount = 0;
  cartCntxt.items.map((item) => {
    return (totalAmount = totalAmount + item.quantity * item.price);
  });

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
