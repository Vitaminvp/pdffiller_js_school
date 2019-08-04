import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ name }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
};

export default Contact;
