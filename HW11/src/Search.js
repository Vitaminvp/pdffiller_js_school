import React, { Component } from "react";
import { Input, Button, Icon } from "semantic-ui-react";

class Search extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  handleInputChange = ({target: {value}}) => {
    console.log("value", value);
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input placeholder="Search..." onChange={this.handleInputChange} />
        <Button animated="vertical" type="submit">
          <Button.Content hidden>Search</Button.Content>
          <Button.Content visible>
            <Icon name="search" />
          </Button.Content>
        </Button>
      </form>
    );
  }
}

export default Search;
