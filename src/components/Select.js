import React from "react";
import "./Select.css";

function Select ({options}) {
  return (
    <select>
      {options.map((item, index) => (
          <option key={index}>{item.settlement_name}</option>
        ))}
    </select>
  );
}

export default Select;