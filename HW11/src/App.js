import React from "react";
import "./App.css";
import Search from "./Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" component={Search} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
