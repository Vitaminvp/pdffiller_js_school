import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelector, addContactData } from '../reducers/contacts';
import { valueSelector, setValue, resetValue } from '../reducers/addContact';
import { setContact } from '../reducers/selectedContact';
import Contact from '../components/Contact';
import AddContact from '../components/AddContact';
import ContactDetail from '../containers/ContactDetail';

class ContactList extends Component {
  render() {
    const { contacts, value, setContactName, addContact, setSelectedContact, resetContactName } = this.props;
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
};

const mapDispatchToProps = ({
  addContact: addContactData,
  setContactName: setValue,
  resetContactName: resetValue,
  setSelectedContact: setContact,
});

const mapStateToProps = state => ({
  contacts: contactsSelector(state),
  value: valueSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
