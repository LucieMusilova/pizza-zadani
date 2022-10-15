import React, { useState } from "react";
import Topping from "../Topping";
import "./style.css";

const ToppingsSelect = ({ toppings }) => {
  const [checked, setChecked] = useState(toppings);

  const handleClick = (index, newCount) => {
    const newChecks = [...checked];
    newChecks[index].check = !newCount;
    setChecked(newChecks);
  };

  let toppingsCount = 0;
  checked.forEach((ch) => {
    if (ch.check === true) {
      toppingsCount++;
    }
  });

  let price = 0;
  checked.forEach((ch) => {
    if (ch.check === true) {
      price = price + ch.price;
    }
  });

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {toppingsCount}, total price: {price.toFixed(2)} Euro
      </p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            checked={topping.check}
            onChange={(newCount) => handleClick(index, newCount)}
            topping={topping}
            key={topping.name}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
