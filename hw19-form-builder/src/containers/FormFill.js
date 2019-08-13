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
  setForm,
  addHistory,
  formHistoryLength
} from "../reducers/selectedForm";
import { withRouter } from "react-router-dom";
import getFormAction from "../action/getForm";
import putFormAction from "../action/putForm";
import { isLoaded, resetLoading } from "../reducers/loading";
import { LOADING_FORM } from "../constants/loading";
import TextPure from "../components/elements/Text";
import NumberPure from "../components/elements/Number";
import DropdownPure from "../components/elements/Dropdown";
import CheckMarkPure from "../components/elements/Checkmark";
import { FIELD_NAMES, FIELD_TYPES } from "../constants/selectedForm";
import { Container, Button } from "@material-ui/core";
import { Save as SaveIcon, History as HistoryIcon } from "@material-ui/icons";
import CustomizedDialogs from "../components/ModalHistory";

class FormFill extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    const { formId } = this.props.match.params;

    if (!this.props.isFormLoaded) {
      this.props.getForm(formId);
    }
  }

  handleChange(name, value) {
    this.setState({ [name]: value }, () =>
      console.log("this.state", this.state)
    );
  }

  render() {
    const {
      form,
      close,
      match,
      history,
      addField,
      deleteField,
      dropdownFieldsLength,
      textFieldsLength,
      numberFieldsLength,
      checkMarkFieldsLength,
      fieldsLength,
      putForm,
      resetLoading,
      addStateToHistory,
      historyLength
    } = this.props;
    if (!form) return null;
    const {
      params: { formId }
    } = match;

    const isFilled = Object.keys(this.state).filter(item => {
      if (
        item.startsWith(FIELD_NAMES.USER) ||
        item.startsWith(FIELD_NAMES.YEAR)
      ) {
        return this.state[item].length > 0;
      }
      return false;
    }).length;
    return (
      <React.Fragment>
        <Container
          maxWidth="sm"
          style={{
            background: "#eaeaea",
            padding: 20,
            borderRadius: 5,
            textAlign: "center",
            marginTop: 50
          }}
        >
          <h1>Form #{formId}</h1>
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
                return (
                  <TextPure
                    {...props}
                    fieldsTypeLength={textFieldsLength}
                    handleChange={this.handleChange}
                    value={this.state[field.name] ? this.state[field.name] : ""}
                  />
                );
              case FIELD_TYPES.NUMBER:
                return (
                  <NumberPure
                    {...props}
                    fieldsTypeLength={numberFieldsLength}
                    handleChange={this.handleChange}
                    value={this.state[field.name] ? this.state[field.name] : ""}
                  />
                );
              case FIELD_TYPES.DROPDOWN:
                return (
                  <React.Fragment key={key}>
                    {field.items && field.items.length && (
                      <DropdownPure
                        {...props}
                        fieldsTypeLength={dropdownFieldsLength}
                        handleChange={this.handleChange}
                        value={
                          this.state[field.name]
                            ? this.state[field.name]
                            : field.items[field.default || 0].name
                        }
                      />
                    )}
                  </React.Fragment>
                );
              case FIELD_TYPES.CHECKMARK:
                return (
                  <CheckMarkPure
                    {...props}
                    fieldsTypeLength={checkMarkFieldsLength}
                    handleChange={this.handleChange}
                    checked={
                      this.state[field.name] ? !!this.state[field.name] : false
                    }
                  />
                );
              default:
                return <div key={index}>{`Unhandled type: ${field.type}`}</div>;
            }
          })}
          <div style={{ margin: "50px 0 30px" }}>
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

            <CustomizedDialogs
              history={form.history ? form.history : []}
              disabled={historyLength <= 0}
            >
              History tables
            </CustomizedDialogs>

            <Button
              disabled={textFieldsLength + numberFieldsLength > isFilled}
              variant="contained"
              size="medium"
              color="primary"
              onClick={() => {
                addStateToHistory({ ...this.state, id: Date.now() });
                putForm(formId, form);
                history.push("/");
              }}
            >
              <SaveIcon />
              &nbsp;Save
            </Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

// FormFill.propTypes = {
//   form: PropTypes.object,
//   close: PropTypes.func
// };

const mapStateToProps = state => ({
  form: formSelector(state),
  isFormLoaded: isLoaded(state, LOADING_FORM),
  textFieldsLength: fieldTypeLength(state, FIELD_TYPES.TEXT),
  numberFieldsLength: fieldTypeLength(state, FIELD_TYPES.NUMBER),
  checkMarkFieldsLength: fieldTypeLength(state, FIELD_TYPES.CHECKMARK),
  dropdownFieldsLength: fieldTypeLength(state, FIELD_TYPES.DROPDOWN),
  fieldsLength: fieldLength(state),
  historyLength: formHistoryLength(state)
});

const mapDispatchToProps = {
  close: resetForm,
  resetLoading,
  getForm: getFormAction,
  setSelectedForm: setForm,
  addField: addFormField,
  deleteField: deleteFormField,
  putForm: putFormAction,
  addStateToHistory: addHistory
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FormFill)
);
