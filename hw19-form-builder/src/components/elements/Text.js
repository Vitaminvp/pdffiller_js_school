import React from "react";
import PropTypes from "prop-types";
import { uniqueId } from '../../utils';

const Text = ({field: { type, name, label, placeholder }}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      defaultValue=""
    />

  </div>
);

Text.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

export default Text;
