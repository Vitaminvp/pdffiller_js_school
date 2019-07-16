import React from "react";
import PropTypes from "prop-types";

export const ThemeContext = React.createContext({
  theme: () => {},
  changeTheme: () => {}
});

class ThemeProvider extends React.Component {
  state = { theme: "light" };

  getTheme = () => this.props.themes[this.state.theme];

  changeTheme = e => this.setState({ theme: e.target.value });

  getValue = () => ({
    theme: this.getTheme(),
    changeTheme: this.changeTheme
  });

  render() {
    return (
      <ThemeContext.Provider value={this.getValue()}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

ThemeProvider.propTypes = {
  themes: PropTypes.object.isRequired
};

export default ThemeProvider;
