import React from "react";
import "./App.css";
import Search from "./Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Repo from "./Repo";

function App() {
  return (
    <Container style={{ padding: 50 }}>
      <Router>
        <Switch>
          <Route path="/repo/:id" component={Repo} />
          <Route exact path="/" component={Search} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
