import React from "react";

import UIButton from "./Button";
import UIWrapper from "./Wrapper";
import ThemeProvider, { withTheme } from "./ThemeProvider";
import themes from "./themes";

import Select from "./Select";

const Button = withTheme(UIButton);
const Wrapper = withTheme(UIWrapper);



const ThemeSelect = withTheme(Select);

class App extends React.Component {
  render() {
    return (
        <ThemeProvider themes={themes}>
          <ThemeSelect themes={themes} />
          <Wrapper>
            <Button>Hello!</Button>
          </Wrapper>
        </ThemeProvider>
    );
  }
}

export default App;
