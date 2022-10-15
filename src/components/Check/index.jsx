import React from "react";
import './style.css';
import { usePrefs } from "../../settings-context";

const Check = ({checked, onChange, index}) => {
  const { veganOnly} = usePrefs();

  const handleClick = () => {
    onChange(checked);
  };
  
  return (
    <button 
      className={veganOnly[index] ? "check" : "check--disabled"}
      onClick={handleClick}
    >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;
