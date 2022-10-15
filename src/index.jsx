import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { SettingsContext } from "./settings-context";
import ToppingsSelect from "./components/ToppingsSelect";
import "./style.css";
import Header from "./components/Header";

const toppings = [
  {
    name: "Pepperoni",
    price: 1,
    vegan: false,
  },
  {
    name: "Mushroom",
    price: 0.35,
    vegan: true,
  },
  {
    name: "Extra cheese",
    price: 0.5,
    vegan: false,
  },
  {
    name: "Sausage",
    price: 0.8,
    vegan: false,
  },
  {
    name: "Onion",
    price: 0.25,
    vegan: true,
  },
  {
    name: "Black olives",
    price: 0.65,
    vegan: true,
  },
  {
    name: "Green pepper",
    price: 0.55,
    vegan: true,
  },
  {
    name: "Fresh garlic",
    price: 0.1,
    vegan: true,
  },
  {
    name: "Tomato",
    price: 0.5,
    vegan: true,
  },
  {
    name: "Fresh basil",
    price: 0.15,
    vegan: true,
  },
  {
    name: "Pineapple",
    price: 0.7,
    vegan: true,
  },
  {
    name: "Prosciutto",
    price: 1.2,
    vegan: false,
  },
];

const App = () => {
  const [veganOnly, setVeganOnly] = useState(toppings.map((topping) => topping.vegan));
  const [allChecked, setAllChecked] = useState(false);
  const [vegChecked, setVegChecked] = useState(false);

  toppings.forEach((topping) => {
    if(allChecked){
      topping.check = true;
    } else if(vegChecked && topping.vegan === true) {
        topping.check = true;
    } else topping.check = false;
  });

  const checkAll = () => {
    setAllChecked(!allChecked);
    setVegChecked(false);
  };

  const checkVege = () => {
    setVegChecked(!vegChecked);
    setAllChecked(false);
  };
  
  return (
    <SettingsContext.Provider value={{ veganOnly, allChecked, vegChecked, checkAll, checkVege }}>
      <div className="container">
        <header>
          <div className="pizza" />
          <h1>Build your own pizza</h1>
        </header>
        <Header />
        <main>
          <ToppingsSelect toppings={toppings} />
        </main>
      </div>
    </SettingsContext.Provider>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
