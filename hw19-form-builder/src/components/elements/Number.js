import React from "react";
import PropTypes from "prop-types";

const Number = ({field: { type, name, label, placeholder }}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      min="1"
      max="10"
      defaultValue=""
    />
  </div>
);

Number.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

export default Number;
