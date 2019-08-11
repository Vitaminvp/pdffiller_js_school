import React, { Component } from "react";

import FormsList from "./containers/FormsList";
// import "./styles/App.css";

class App extends Component {

render() {



    return (
      <div style={{ textAlign: "center" }}>
        <h1>Forms List</h1>
        <FormsList />
      </div>
    );
  }
}

export default App;
