import React from "react";
import './style.css';
import { usePrefs } from "../../settings-context";

const Header = () => {
  const { allChecked, vegChecked, checkAll, checkVege } = usePrefs();

  return (
    <div className="choose">
      <div className="choose-div">
          <input onChange={checkAll} type="checkbox" name="all" checked={allChecked}/>
          <label htmlFor="all"> I want all ingredients</label>
      </div>
      <div className="choose-div">
          <input onChange={checkVege} type="checkbox" name="vege" checked={vegChecked}/>
          <label htmlFor="vege"> I just want veggie ingredients</label>
      </div>
    </div>
  );
};

export default Header;
