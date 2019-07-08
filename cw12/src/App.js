import React, { Component } from "react";
import api from "./api";
import {
  Container,
  Loader,
  Input,
  List,
  Icon,
  Segment,
  Dimmer
} from "semantic-ui-react";

class App extends Component {
  state = {
    list: [],
    loading: false
  };
  componentDidMount() {
    api.get("").then(list => {
      this.setState({ list });
    });
  }

  onBlur = ({ target }) => {
    this.setState({ loading: true });
    api.get(target.value).then(list => {
      this.setState({ list, loading: false });
    });
  };

  keyDown = e => {
    if (e.keyCode === 13) {
      this.onBlur(e);
    }
  };

  Submit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements[0].value;
    this.setState({ loading: true });
    if (value) {
      api.put(value).then(list => {
        this.setState({ list, loading: false });
      });
    }
  };

  Delete = e => {
    console.log("click");
    const id = e.target.dataset.id;
    this.setState({ loading: true });
    api.delete(id).then(list => {
      this.setState({ list, loading: false });
    });
  };

  render() {
    const { list, loading } = this.state;
    return (
      <Container style={{ textAlign: "center", width: 150 }}>
        <Input
          type="text"
          onKeyDown={this.keyDown}
          onBlur={this.onBlur}
          placeholder="Search..."
        />
        <List style={{ maxWidth: 100, margin: "50px 0", justifyContent: "center" }}>
          {loading ? (
            <Dimmer active>
              <Loader />
            </Dimmer>
          ) : (
            list.map(item => (
              <List.Item key={item.id} style={{ textAlign: "left" }}>
                <List.Icon name="user circle" />
                <List.Content>{item.name}</List.Content>
                <Icon
                  name="delete"
                  onClick={this.Delete}
                  data-id={item.id}
                  style={{ cursor: "pointer" }}
                />
              </List.Item>
            ))
          )}
        </List>
        <form onSubmit={this.Submit}>
          <Input type="text" name="name" placeholder="Add..." />
        </form>
      </Container>
    );
  }
}

export default App;
