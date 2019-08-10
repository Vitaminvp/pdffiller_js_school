import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import {Icon, Button} from "@material-ui/core";



const AddForm = withRouter(({ onAddForm, onChange, val, resetVal, history }) => {
  const onClick = () => {
    history.push("/new");
    // onAddForm(val);
    // resetVal();
  };
  return (
    <div>
      {/*<input onChange={({ target: { value } }) => onChange(value)} value={val} />*/}

      <Button variant="contained" color="primary"  onClick={onClick} style={{marginTop: 20}}>
        Add form
        <Icon>add</Icon>
      </Button>
    </div>
  );
});

// AddForm.propTypes = {
//   val: PropTypes.string,
//   onChange: PropTypes.func,
//   onAddForm: PropTypes.func,
//   resetVal: PropTypes.func,
// };

export default AddForm;
