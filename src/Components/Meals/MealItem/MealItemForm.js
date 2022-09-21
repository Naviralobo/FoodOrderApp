import React, { useContext } from "react";
import CartCntxt from "../../../Store/CartContext";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const cartCntxt = useContext(CartCntxt);
  const addItemToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("amount_" + props.id).value;
    cartCntxt.addItem({ ...props.item, quantity });
    //console.log(props.item);
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
