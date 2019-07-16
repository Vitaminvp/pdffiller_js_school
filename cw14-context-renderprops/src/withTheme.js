import React from "react";
import {ThemeContext} from "./ThemeProvider";

const withTheme = Component => props => (
    <ThemeContext.Consumer>
        {({ theme, changeTheme }) => (
            <Component {...props} changeTheme={changeTheme} theme={theme} />
        )}
    </ThemeContext.Consumer>
);

export default withTheme;