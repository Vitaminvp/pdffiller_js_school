import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const Number = ({ field: { name, label }, handleChange, value }) => (
  <div>
      <TextField
          id={name}
          name={name}
          label={label}
          value={value}
          onChange={(event) => handleChange(name, event.target.value)}
          type="number"
          InputLabelProps={{
              shrink: true,
          }}
          margin="normal"
          required
      />
  </div>
);

// Number.propTypes = {
//   type: PropTypes.string,
//   name: PropTypes.string,
//   label: PropTypes.string,
//   placeholder: PropTypes.string
// };

export default Number;
