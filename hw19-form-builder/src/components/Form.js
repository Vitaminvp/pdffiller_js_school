import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ name }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

// Form.propTypes = {
//   name: PropTypes.string,
// };

export default Form;
