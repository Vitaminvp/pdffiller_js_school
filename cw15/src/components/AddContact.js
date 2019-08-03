import React from 'react';
import PropTypes from 'prop-types';

const AddContact = ({ onAddContact, onChange, val, resetVal }) => {
  const onClick = () => {
    onAddContact(val);
    resetVal();
  };
  return (
    <div>
      <input onChange={({ target: { value } }) => onChange(value)} value={val} />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

AddContact.propTypes = {
  val: PropTypes.string,
  onChange: PropTypes.func,
  onAddContact: PropTypes.func,
  resetVal: PropTypes.func,
};

export default AddContact;
