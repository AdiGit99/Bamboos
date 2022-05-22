import React from "react";

const states = [
  ["CA", "Canada (+1)"],
  ["HK", "Hong Kong (+852)"],
  ["US", "United States (+1)"],
];

export const Dropdown = ({ options, label, ...others }) => (
  <p>
    <label>
      {label}
      <div className="select-wrapper">
        <select className="w3-select" {...others}>
          {options.map(([value, name]) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </label>
  </p>
);
