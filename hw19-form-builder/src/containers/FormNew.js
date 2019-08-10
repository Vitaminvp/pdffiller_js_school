import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  addFormField,
  deleteFormField,
  fieldLength,
  fieldTypeLength,
  formSelector,
  resetForm,
  setForm
} from "../reducers/selectedForm";
import getFormAction from "../action/getForm";
import postFormAction from "../action/postForm";
import { isLoaded, resetLoading } from "../reducers/loading";
import { LOADING_FORM } from "../constants/loading";
import TextPure from "../components/elements/Text";
import NumberPure from "../components/elements/Number";
import DropdownPure from "../components/elements/Dropdown";
import CheckMarkPure from "../components/elements/Checkmark";
import withHOCField from "../components/elements/withHOCField";
import { FIELD_TYPES } from "../constants/selectedForm";
import { resetFormsData } from "../reducers/forms";
import { Button, Container } from "@material-ui/core";

const Text = withHOCField(TextPure);
const Dropdown = withHOCField(DropdownPure);
const Number = withHOCField(NumberPure);
const CheckMark = withHOCField(CheckMarkPure);

class FormNew extends Component {
  render() {
    const {
      form,
      close,
      history,
      addField,
      deleteField,
      dropdownFieldsLength,
      textFieldsLength,
      numberFieldsLength,
      checkmarkFieldsLength,
      fieldsLength,
      postForm
    } = this.props;
    if (!form) return null;
    console.log("this.props", this.props);
    return (
      <React.Fragment>
        <Container
          maxWidth="sm"
          style={{
            background: "#eaeaea",
            padding: 20,
            borderRadius: 5,
            textAlign: "center"
          }}
        >
          <h1>Form Detail </h1>
          <h2>{form.name}</h2>
          {form.fields.map((field, key) => {
            const props = {
              field,
              key,
              addField,
              deleteField,
              fieldsLength
            };
            switch (field.type) {
              case FIELD_TYPES.TEXT:
                return <Text {...props} fieldsTypeLength={textFieldsLength} />;
              case FIELD_TYPES.NUMBER:
                return (
                  <Number {...props} fieldsTypeLength={numberFieldsLength} />
                );
              case FIELD_TYPES.DROPDOWN:
                return (
                  <Dropdown
                    {...props}
                    fieldsTypeLength={dropdownFieldsLength}
                  />
                );
              case FIELD_TYPES.CHECKMARK:
                return (
                  <CheckMark
                    {...props}
                    fieldsTypeLength={checkmarkFieldsLength}
                  />
                );
              default:
                return <div key={index}>{`Unhandled type: ${field.type}`}</div>;
            }
          })}
          <div>
            <Button
              variant="outlined"
              size="medium"
              color="primary"
              style={{ marginRight: 10 }}
              onClick={() => {
                resetLoading(LOADING_FORM);
                close();
                history.push("/");
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              onClick={() => {
                resetFormsData();
                postForm(form);
                history.push("/");
              }}
            >
              Save
            </Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

// FormNew.propTypes = {
//   form: PropTypes.object,
//   close: PropTypes.func
// };

const mapStateToProps = state => ({
  form: formSelector(state),
  isFormLoaded: isLoaded(state, LOADING_FORM),
  textFieldsLength: fieldTypeLength(state, FIELD_TYPES.TEXT),
  numberFieldsLength: fieldTypeLength(state, FIELD_TYPES.NUMBER),
  checkmarkFieldsLength: fieldTypeLength(state, FIELD_TYPES.CHECKMARK),
  dropdownFieldsLength: fieldTypeLength(state, FIELD_TYPES.DROPDOWN),
  fieldsLength: fieldLength(state)
});

const mapDispatchToProps = {
  close: resetForm,
  getForm: getFormAction,
  setSelectedForm: setForm,
  addField: addFormField,
  deleteField: deleteFormField,
  postForm: postFormAction,
  resetFormsData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormNew);
