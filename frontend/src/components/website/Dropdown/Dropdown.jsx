import React from "react";

export const Dropdown = () => (
  <div className="select-container">
    <select className="login-signup-container">
      {states.map(([value, name]) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  </div>
);
