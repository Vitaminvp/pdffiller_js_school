import React from 'react';

/* ThemeSelect */
const Select = ({ themes, changeTheme }) => (
    <select onChange={changeTheme}>
        {Object.keys(themes).map(theme => (
            <option key={theme} value={theme}>
                {theme}
            </option>
        ))}
    </select>
);

export default Select;