import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "Amount",
          min: "1",
          max: "1",
          step: "1",
          type: "number",
          defaultValue: "1",
        }}
      />
      <button className={classes.button}>+add</button>
    </form>
  );
};

export default MealItemForm;
