import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import {setForm} from "../reducers/selectedForm";

const AddForm = withRouter(({ onAddForm, onChange, val, resetVal, history }) => {
  const onClick = () => {
    history.push("/new");
    // onAddForm(val);
    // resetVal();
  };
  return (
    <div>
      {/*<input onChange={({ target: { value } }) => onChange(value)} value={val} />*/}
      <button onClick={onClick}>Add New Form</button>
    </div>
  );
});

AddForm.propTypes = {
  val: PropTypes.string,
  onChange: PropTypes.func,
  onAddForm: PropTypes.func,
  resetVal: PropTypes.func,
};

export default AddForm;
