import React, { Component } from "react";
import { Message } from "semantic-ui-react";
import { fetchRepo } from "./helpers";

class Repo extends Component {
  state = {
    repoInfo: {}
  };
  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    if (id) {
      const [value, repo] = [...id.split("+")];
      if (value && repo) {
        const repoInfo = await fetchRepo(`${value}/${repo}`);
        if (!repoInfo.message) {
          this.setState({ repoInfo });
        } else {
          alert(repoInfo.message);
        }
      }
    }
  }

  render() {
    const {
      default_branch = "",
      network_count = "",
      subscribers_count = "",
      source = {},
      name = "",
      full_name = "",
      html_url = "",
      description = ""
    } = this.state.repoInfo;
    return (
      <Message style={{ margin: 50 }}>
        <Message.Header>{name}</Message.Header>
        <Message.Header>{description}</Message.Header>
        <Message.List>
          <Message.Item>Full Name: {full_name}</Message.Item>
          <Message.Item>Url: {html_url}</Message.Item>
          <Message.Item>Default branch: {default_branch}</Message.Item>
          <Message.Item>Network count: {network_count}</Message.Item>
          <Message.Item>Subscribers count: {subscribers_count}</Message.Item>
          <Message.Item>Source: {source.full_name}</Message.Item>
        </Message.List>
      </Message>
    );
  }
}

export default Repo;
