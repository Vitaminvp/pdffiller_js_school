import React from "react";
import { Context } from "./init";
import Child1 from "./Child1";
import Child2 from "./Child2";
import withHOC from "./withHOC";

const Child = withHOC(Child2);
const themes = {
  light: {
    color: "black",
    backgroundColor: "white",
    fontSize: "13px"
  },
  dark: {
    color: "white",
    backgroundColor: "black",
    fontSize: "13px"
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    value: "light"
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      value
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <select onChange={this.handleChange}>
            <option value="light">Пункт 1</option>
            <option value="dark">Пункт 2</option>
          </select>
        </div>
        <Context.Provider value={themes[this.state.value]}>
          <Child1 />
          <Child />
        </Context.Provider>
      </>
    );
  }
}

export default App;
