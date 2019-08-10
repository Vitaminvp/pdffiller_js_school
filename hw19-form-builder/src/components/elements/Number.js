import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Text from "./Text";

const Number = ({ field: {type, name, label, placeholder }, handleChange, value, disabled = false }) => (
  <div>
      <TextField
          id={name}
          name={name}
          label={label}
          value={value}
          onChange={(event) => handleChange(name, event.target.value)}
          type="number"
          margin="normal"
          placeholder={placeholder}
          disabled={disabled}
      />
  </div>
);

Number.DefaultProps = {
    value: ""
};

// Number.propTypes = {
//   type: PropTypes.string,
//   name: PropTypes.string,
//   label: PropTypes.string,
//   placeholder: PropTypes.string
// };

export default Number;
