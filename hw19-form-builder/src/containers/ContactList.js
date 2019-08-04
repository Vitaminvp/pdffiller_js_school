import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelector, addContactData } from '../reducers/contacts';
import { valueSelector, setValue, resetValue } from '../reducers/addContact';
import { setContact } from '../reducers/selectedContact';
import Contact from '../components/Contact';
import AddContact from '../components/AddContact';
import ContactDetail from '../containers/ContactDetail';
import getContactsAction from '../action/getContacts';
import { LOADING_CONTACTS } from '../constants/loading';
import { isLoaded } from '../reducers/loading';

class ContactList extends Component {
  componentDidMount() {
      if (!this.props.isContactLoaded) {
          this.props.getContacts();
      }

  }
  render() {
    const {
      contacts, value, setContactName, addContact, setSelectedContact, resetContactName
    } = this.props;

    if (!this.props.isContactLoaded) {
      return (<div>LOADING . . .</div>);
    }
    return (
      <div>
        {
          contacts.map(el => (
            <div onClick={() => setSelectedContact(el)} key={el.id}>
              <Contact name={el.name} />
            </div>)
          )
        }

        <ContactDetail />

        <AddContact
          onAddContact={addContact}
          onChange={setContactName}
          val={value}
          resetVal={resetContactName}
        />
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  value: PropTypes.string,
  addContact: PropTypes.func,
  setContactName: PropTypes.func,
  resetContactName: PropTypes.func,
  setSelectedContact: PropTypes.func,
  getContacts: PropTypes.func,
  isContactLoaded: PropTypes.bool,
};

const mapDispatchToProps = ({
  addContact: addContactData,
  setContactName: setValue,
  resetContactName: resetValue,
  setSelectedContact: setContact,
  getContacts: getContactsAction,
});

const mapStateToProps = state => ({
  contacts: contactsSelector(state),
  value: valueSelector(state),
  isContactLoaded: isLoaded(state, LOADING_CONTACTS),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
