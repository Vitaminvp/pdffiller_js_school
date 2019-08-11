import React from "react";
import PropTypes from "prop-types";
import { TextField, MenuItem } from "@material-ui/core";

const Dropdown = ({ field, value = "", handleChange, disabled = false }) => {
  const { type, name, label, items = [] } = field;
  const item = items.find(item => item.name === value);
  return (
    <div>
      <TextField
        id={name}
        select
        label={label}
        value={item ? item.value : ""}
        helperText={label}
        margin="normal"
        onChange={event =>
          handleChange(
            name,
            disabled
              ? ""
              : items.find(item => item.value === event.target.value).name
          )
        }
        style={{ minWidth: 160 }}
        disabled={disabled}
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

Dropdown.DefaultProps = {
  value: "",
  field: { items: [] }
};

// Dropdown.propTypes = {
//   type: PropTypes.string,
//   name: PropTypes.string,
//   label: PropTypes.string,
//   default: PropTypes.number,
//   items: PropTypes.array
// };

export default Dropdown;
