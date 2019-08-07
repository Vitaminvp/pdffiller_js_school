import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { contactsSelector, addFormData } from "../reducers/forms";
import { valueSelector, setValue, resetValue } from "../reducers/addContact";
import Form from "../components/Form";
import AddForm from "../components/AddForm";
import getFormsAction from "../action/getForms";
import { LOADING_FORMS } from "../constants/loading";
import { isLoaded } from "../reducers/loading";
import { NavLink } from "react-router-dom";

class FormsList extends Component {
  componentDidMount() {
    if (!this.props.isFormsLoaded) {
      this.props.getForms();
    }
  }
  render() {
    const {
      forms,
      value,
      setContactName,
      addForm,
      resetContactName
    } = this.props;

    if (!this.props.isFormsLoaded) {
      return <div>LOADING . . .</div>;
    }
    return (
      <ul>
        {forms.map(el => (
          <li key={el.id}>
            <NavLink to={`/form/${el.id}`}>
              <Form name={el.name} />
            </NavLink>
          </li>
        ))}

        <AddForm
          onAddForm={addForm}
          onChange={setContactName}
          val={value}
          resetVal={resetContactName}
        />
      </ul>
    );
  }
}
// onClick={() => setSelectedForm(el)}
FormsList.propTypes = {
  forms: PropTypes.array,
  value: PropTypes.string,
  addContact: PropTypes.func,
  setContactName: PropTypes.func,
  resetContactName: PropTypes.func,
  getForms: PropTypes.func,
  isFormsLoaded: PropTypes.bool
};

const mapStateToProps = state => ({
  forms: contactsSelector(state),
  value: valueSelector(state),
  isFormsLoaded: isLoaded(state, LOADING_FORMS)
});

const mapDispatchToProps = {
  addForm: addFormData,
  setContactName: setValue,
  resetContactName: resetValue,
  getForms: getFormsAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormsList);
