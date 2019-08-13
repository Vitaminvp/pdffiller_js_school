import React, { Component } from "react";
import FormsList from "./containers/FormsList";
import { FormattedMessage } from "react-intl";
// import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>
          <FormattedMessage id="title" defaultMessage="Title default++++++" />
        </h1>
        <FormsList download="download" />
      </div>
    );
  }
}

export default App;
