import React from "react";
import "./style.css";
import { usePrefs } from "../../settings-context";

const Check = ({ checked, onChange, disabled }) => {
  const { veganOnly } = usePrefs();

  const handleClick = () => {
    onChange(checked);
  };

  return (
    <button
      className={veganOnly && !disabled ? "check check--disabled" : "check"}
      onClick={handleClick}
      disabled={veganOnly && !disabled}
    >
      {checked ? "✓" : ""}
    </button>
  );
};

export default Check;
