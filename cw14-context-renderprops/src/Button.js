import React from "react";
import PropTypes from "prop-types";

const Button = ({ theme, children }) => (
  <button style={{ color: theme.color }}>{children}</button>
);

Button.propTypes = {
  theme: PropTypes.object
};

export default Button;
