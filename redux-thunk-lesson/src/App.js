import React, { Component } from 'react';

import ContactList from './containers/ContactList';
// import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <hr />
        <ContactList />
      </div>
    );
  }
}


export default App;
