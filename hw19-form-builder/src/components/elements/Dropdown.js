import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({field}) => {
  const { type, name, label, items } = field;
  return (
    <div>
      <label htmlFor={name} title={type}>
        {label}
      </label>
      <select name={name} id={name} defaultValue={field.default}>
        {items.map(({name, value}, index) => (
          <option value={value} key={index}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

Text.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  default: PropTypes.number,
  items: PropTypes.array
};

export default Dropdown;
