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
  updateFields
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
import withHOCField from "../components/elements/withHOCField";
import { FIELD_TYPES } from "../constants/selectedForm";
import { Container, Button, List, ListItem, Divider } from "@material-ui/core";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ListItemPure from "../components/ListItem";

const Text = withHOCField(TextPure);
const Dropdown = withHOCField(DropdownPure);
const Number = withHOCField(NumberPure);
const CheckMark = withHOCField(CheckMarkPure);

class FormDetail extends Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {
    const { formId } = this.props.match.params;

    if (!this.props.isFormLoaded) {
      console.log("isFormLoaded", formId);
      this.props.getForm(formId);
    }
  }
  onDragEnd(result) {
    console.log(result);
    console.log("this.props", this.props);
    const {
      params: { formId }
    } = this.props.match;

    console.log("formId", formId);
    const { destination, source } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const { form } = this.props;
    const fields = [...form.fields];
    const item = fields.splice(source.index, 1);
    fields.splice(destination.index, 0, item[0]);
    this.props.updateFields(fields);
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
      resetLoading
    } = this.props;
    if (!form) return null;
    const {
      params: { formId }
    } = match;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
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
          <h1>Form Detail {formId}</h1>
          <h2>{form.name}</h2>
          <Droppable droppableId="listFormsDetailedId">
            {provided => (
              <List innerRef={provided.innerRef} {...provided.droppableProps}>
                {form.fields.map((field, index) => {
                  const props = {
                    field,
                    addField,
                    deleteField,
                    fieldsLength
                  };

                  const element = field => {
                    switch (field.type) {
                      case FIELD_TYPES.TEXT:
                        return (
                          <Text
                            key={`${field.name}-${index}`}
                            {...props}
                            fieldsTypeLength={textFieldsLength}
                          />
                        );
                      case FIELD_TYPES.NUMBER:
                        return (
                          <Number
                            key={`${field.name}-${index}`}
                            {...props}
                            fieldsTypeLength={numberFieldsLength}
                          />
                        );
                      case FIELD_TYPES.DROPDOWN:
                        return (
                          <Dropdown
                            key={`${field.name}-${index}`}
                            {...props}
                            fieldsTypeLength={dropdownFieldsLength}
                          />
                        );
                      case FIELD_TYPES.CHECKMARK:
                        return (
                          <CheckMark
                            key={`${field.name}-${index}`}
                            {...props}
                            fieldsTypeLength={checkMarkFieldsLength}
                          />
                        );
                      default:
                        return null;
                    }
                  };

                  return (
                    <Draggable draggableId={field.name} index={index} key={field.id || field.name}>
                      {provided => (
                        <ListItem
                          button
                          innerRef={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={field.id || field.name}
                        >
                          {element(field)}
                        </ListItem>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </List>
            )}
          </Droppable>

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
            <Button
              variant="contained"
              size="medium"
              color="primary"
              onClick={() => {
                putForm(formId, form);
                history.push("/");
              }}
            >
              Update
            </Button>
          </div>
        </Container>
      </DragDropContext>
    );
  }
}
//
// FormDetail.propTypes = {
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
  fieldsLength: fieldLength(state)
});

const mapDispatchToProps = {
  close: resetForm,
  resetLoading,
  getForm: getFormAction,
  setSelectedForm: setForm,
  addField: addFormField,
  deleteField: deleteFormField,
  putForm: putFormAction,
  updateFields
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FormDetail)
);
