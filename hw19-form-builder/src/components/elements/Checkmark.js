import React from "react";
import PropTypes from "prop-types";

const CheckMark = ({field: { type, name, label }}) => (
  <div>
    <label title={type}>
      <input type="checkbox" value="" name={name} />
      {label}
    </label>
  </div>
);

CheckMark.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string
};

export default CheckMark;
