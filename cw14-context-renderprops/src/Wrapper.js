import React from "react";
import PropTypes from "prop-types";

const getStyle = theme => ({
    backgroundColor: theme.backgroundColor,
    fontSize: theme.fontSize,
    padding: theme.padding
});

const Wrapper = ({ theme, children }) => (
    <div style={getStyle(theme)}>{children}</div>
);

Wrapper.propTypes = {
    theme: PropTypes.object
};

export default Wrapper;