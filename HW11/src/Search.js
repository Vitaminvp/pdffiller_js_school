import React, { Component } from "react";
import { Input, Button, Icon, List, Pagination } from "semantic-ui-react";
import { CONSTANTS, convertToData, fetchRepos } from "./helpers";
import { NavLink } from "react-router-dom";

class Search extends Component {
  state = {
    value: "",
    links: [],
    activePage: 1
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { value } = this.state;
    if (value) {
      const links = await fetchRepos(value);
      if (Array.isArray(links)) {
        this.setState({ links });
      } else {
        alert(links.message);
      }
    }
  };

  handleInputChange = ({ target: { value } }) => {
    if (value) {
      this.setState({ value });
    }
  };

  componentDidMount() {}

  componentWillUnmount() {
    localStorage.setItem(
      CONSTANTS.SearchComponentState,
      JSON.stringify(this.state)
    );
  }

  async componentWillMount() {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const value = params.get("username");
    if (value) {
      const links = await fetchRepos(value);
      if (Array.isArray(links)) {
        this.setState({ links, value });
      } else {
        alert(links.message);
      }
    } else {
      const localState = localStorage.getItem(CONSTANTS.SearchComponentState);
      if (localState) {
        this.setState({ ...JSON.parse(localState) });
      }
    }
  }
  handlePageChange = ({ target }) => {
    const activePage = target.getAttribute("value");
    if (activePage && Number.isInteger(Number(activePage))) {
      this.setState({ activePage }, () => {
          localStorage.setItem(
              CONSTANTS.SearchComponentState,
              JSON.stringify(this.state)
          );
      });

    }
  };

  render() {
    const { links, value, activePage } = this.state;
    const linksPerPage = CONSTANTS.linksPerPage;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="search-form">
          <Input
            placeholder="Search..."
            onChange={this.handleInputChange}
            value={value}
            className="search-input"
          />
          <Button animated="vertical" type="submit">
            <Button.Content hidden>Search</Button.Content>
            <Button.Content visible>
              <Icon name="search" />
            </Button.Content>
          </Button>
        </form>
        <List divided relaxed style={{ maxWidth: 560, margin: "50px auto" }}>
          {links
            .slice((activePage - 1) * linksPerPage, activePage * linksPerPage)
            .map(link => (
              <List.Item key={link.id}>
                <List.Icon name="github" size="large" verticalAlign="middle" />
                <List.Content>
                  <NavLink to={`/repo/${value}+${link.name}`}>
                    <List.Header as="p">{link.full_name}</List.Header>
                    <List.Description as="i">
                      {link.description}
                    </List.Description>
                    <List.Description as="p">
                      {link.updated_at
                        ? `Updated ${convertToData(link.updated_at)}`
                        : ""}
                    </List.Description>
                  </NavLink>
                </List.Content>
              </List.Item>
            ))}
        </List>
        <div style={{ textAlign: "center" }}>
          {links.length > 0 && (
            <Pagination
              boundaryRange={0}
              defaultActivePage={activePage}
              ellipsisItem={null}
              firstItem={null}
              lastItem={null}
              siblingRange={1}
              totalPages={Math.ceil(links.length / linksPerPage)}
              onPageChange={this.handlePageChange}
            />
          )}
        </div>
      </>
    );
  }
}

export default Search;
