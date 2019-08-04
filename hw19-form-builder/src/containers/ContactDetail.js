import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { contactSelector, resetContact } from '../reducers/selectedContact';

class ContactDetail extends Component {
  render() {
    const { contact, close } = this.props;
    if (!contact) return null;
    return (
      <div>
        <hr />
        <h1>Contact Detail</h1>
        <h2>{contact.name}</h2>
        <button onClick={close}>Close</button>
        <hr />
      </div>
    );
  }
}

ContactDetail.propTypes = {
  contact: PropTypes.object,
  close: PropTypes.func,
};

const mapDispatchToProps = ({
  close: resetContact,
});

const mapStateToProps = (state) => ({
  contact: contactSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);
