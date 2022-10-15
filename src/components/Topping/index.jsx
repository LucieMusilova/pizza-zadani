import React from "react";
import Check from "../Check";
import './style.css';

const Topping = ({ topping, checked, onChange, index }) => {
  return (
    <div className="topping">
      <Check checked={checked} onChange={onChange} index={index}/>
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
