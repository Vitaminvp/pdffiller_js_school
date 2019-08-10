import React from "react";
import PropTypes from "prop-types";
import { TextField, MenuItem } from "@material-ui/core";

const Dropdown = ({ field, value, handleChange }) => {
  const { type, name, label, items } = field;
  return (
    <div>
      <TextField
        id={name}
        select
        label={label}
        value={value}
        helperText={label}
        margin="normal"
        onChange={(event) => handleChange(name, event.target.value)}
        style={{minWidth: 160}}
      >
        {items.map(({ name, value }, index) => (
          <MenuItem value={value} key={index}>
            {name}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

// Text.propTypes = {
//   type: PropTypes.string,
//   name: PropTypes.string,
//   label: PropTypes.string,
//   default: PropTypes.number,
//   items: PropTypes.array
// };

export default Dropdown;
